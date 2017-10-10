const localtunnel = require('localtunnel')
const express = require('express')
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

app.listen(4000, () => console.log('Server Listening on Port 4000'))

console.log(clientId + ' ' + clientSecret)
