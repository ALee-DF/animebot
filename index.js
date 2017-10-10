const localtunnel = require('localtunnel')
const express = require('express')
const app = express()

const tunnel = localtunnel(4000, { subdomain: 'animebot' }, (err, tunnel) => {
  if (err) {
    console.error(err)
  }
  console.log('Tunnel Opened on : ' + tunnel.url)
})

tunnel.on('close,', () => {
  console.log('Tunnels are Closed.')
})

app.get('/', (req, res) => res.send('test'))

app.listen(4000, () => console.log('Server Listening on Port 4000'))
console.log(tunnel)
