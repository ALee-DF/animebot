const request = require('request')
const parseString = require('xml2js').parseString
const massageAnnData = require('./massageAnnData')

function getAnnAnimeInfo(id) {
  return new Promise(function (resolve, reject) {
    request('http://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=' + id, (err, response, body) => {
      if (err) return reject(err)
      parseString(body, (err, result) => {
        if (err) {
          return resolve(null)
        }
        if (!result.ann.anime) {
          return resolve(null)
        }
        resolve(result.ann.anime[0])
      })
    })
  })
}

getAnnAnimeInfo(15784)
  .then(massageAnnData)
