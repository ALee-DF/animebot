const request = require('request')
function getAnnAnimeInfo(id) {
  return new Promise(function (resolve, reject) {
    request('http://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=' + id, (err, response, body) => {
      if (err) return reject(err)
      console.log(body)
    })
  })
}

console.log(getAnnAnimeInfo(15784))
