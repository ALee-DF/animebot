const localtunnel = require('localtunnel')
const express = require('express')
const request = require('request')
const app = express()
const clientId = 'redacted'
const clientSecret = 'redacted'

const tunnel = localtunnel(4000, { subdomain: 'animebot' }, (err, tunnel) => {
  if (err) {
    console.error(err)
  }
  console.log('Tunnel Opened on: ' + tunnel.url)
})

tunnel.on('close,', () => {
  console.log('Tunnels are Closed.')
})

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

app.listen(4000, () => console.log('Server Listening on Port 4000'))
