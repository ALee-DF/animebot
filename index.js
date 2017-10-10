const localtunnel = require('localtunnel')

const tunnel = localtunnel(4000, { subdomain: 'animebot' }, (err, tunnel) => {
  if (err) {
    console.error(err)
  }
  console.log('Tunnel Opened on : ' + tunnel.url)
})

console.log(tunnel)
