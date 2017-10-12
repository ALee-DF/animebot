const localtunnel = require('localtunnel')
const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const checklistFile = require('./buttons-checklist.js')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const clientId = process.env.clientId
const clientSecret = process.env.ClientSecret
const animebotVerificationToken = process.env.animebot_verification_token
const buttonsChecklist = checklistFile['buttonsChecklist']

const tunnel = localtunnel(4000, { subdomain: 'animebot' }, (err, tunnel) => {
  if (err) {
    console.error(err)
  }
  console.log('Tunnel Opened on: ' + tunnel.url)
})

tunnel.on('close,', () => {
  console.log('Tunnels are Closed.')
})

MongoClient.connect('mongodb://localhost/animebot', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const app = express()

  app.get('/', (req, res) => res.send('localtunnel is successful'))

  app.get('/oauth', (req, res) => {
    if (!req.query.code) {
      res.sendstatus(500)
      res.send({'Error': 'Looks like we\'re not getting code.'})
      console.error('Looks like we\'re not getting code.')
    }
    else {
      request(
        {
          url: 'https://slack.com/api/oauth.access',
          qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret},
          method: 'GET'
        },
        (err, response, body) => {
          if (err) {
            console.error(err)
            res.sendStatus(500)
          }
          else {
            res.json(body)
          }
        })
    }
  })

  app.post('/command', (req, res) => {
    res.send('Connection to localtunnel verified. Ready for your next adventure?')
  })

  function sendMessageToSlackResponseURL(responseURL, JSONmessage) {
    const postOptions = {
      uri: responseURL,
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      json: JSONmessage
    }
    request(postOptions, (err, res, body) => {
      if (err) {
        console.error(err)
      }
    })
  }

  app.post('/checklist', urlencodedParser, (req, res) => {
    const reqBody = req.body
    const responseURL = reqBody.response_url
    if (reqBody.token !== animebotVerificationToken) {
      console.error('Access Forbidden')
      res.sendStatus(403)
    }
    else {
      res.status(200).end()
      sendMessageToSlackResponseURL(responseURL, buttonsChecklist)
      console.log(req.body)
    }
  })

  app.post('/buttonaction', urlencodedParser, (req, res) => {
    res.status(200).end()
    const actionJSONPayload = JSON.parse(req.body.payload)
    const attachmentID = Number(actionJSONPayload['attachment_id']) - 1
    const targetIndex = buttonsChecklist['attachments'][attachmentID]['actions']
      .findIndex(button => {
        return button.name === actionJSONPayload.actions[0].name
      })
    if (actionJSONPayload.actions[0].value === 'deselected') {
      buttonsChecklist['attachments'][attachmentID]['actions'][targetIndex]['value'] = 'selected'
      buttonsChecklist['attachments'][attachmentID]['actions'][targetIndex]['style'] = 'primary'
    }
    else {
      buttonsChecklist['attachments'][attachmentID]['actions'][targetIndex]['value'] = 'deselected'
      buttonsChecklist['attachments'][attachmentID]['actions'][targetIndex]['style'] = 'default'
    }
    sendMessageToSlackResponseURL(actionJSONPayload.response_url, buttonsChecklist)
    console.log(actionJSONPayload)
  })

  app.listen(4000, () => console.log('Server Listening on Port 4000'))
})
