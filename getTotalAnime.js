const request = require('request')
const parseString = require('xml2js').parseString

module.exports = function getTotalAnime() {
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
