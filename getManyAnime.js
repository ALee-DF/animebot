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

function getTotalAnime() {
  return new Promise(function (resolve, reject) {
    request('http://www.animenewsnetwork.com/encyclopedia/reports.xml?id=148&nlist=1', function (error, response, body) {
      if (error) {
        return reject(error)
      }
      else {
        parseString(body, (err, result) => {
          if (err) {
            return reject(error)
          }
          return resolve(result['report']['item'][0]['anime'][0]['$']['href'].replace('/encyclopedia/anime.php?id=', ''))
        })
      }
    })
  })
}

getTotalAnime()
  .then(value => {
    console.log(value)
  })

getAnnAnimeInfo(15784)
  .then(massageAnnData)
  .then(value => {
    console.log(value)
  })
