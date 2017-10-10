const localtunnel = require('localtunnel')
const express = require('express')
const request = require('request')
const app = express()
const clientId = '232154912464.253884891829'
const clientSecret = '9a4266c986fd9a04763c825c10331d4e'
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
    res.status(500)
    res.send({'Error': 'Looks like we\'re not getting code.'})
    console.error('Looks like we\'re not getting code.')
  }
  else {
    request(
      {
        url: 'https://slack.com/api/oauth.access', // URL to hit
        qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret}, // Query string data
        method: 'GET' // Specify the method
      },
      (err, response, body) => {
        if (err) {
          console.error(err)
        }
        else {
          res.json(body)
        }
      })
  }
})

app.listen(4000, () => console.log('Server Listening on Port 4000'))

console.log(clientId + ' ' + clientSecret)
