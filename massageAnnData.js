module.exports = function massageAnnData(raw) {
  if (!raw) return null
  const { info, credit, $ } = raw
  const { id, type, name, precision } = $
  const massaged = {
    annID: id,
    name,
    alternative_names: getAlternativeNames(info),
    type,
    precision,
    episodes: getAnnAttribute(info, 'Number of episodes'),
    duration: getAnnAttribute(info, 'Running time'),
    synopsis: getAnnAttribute(info, 'Plot Summary'),
    releaseDate: getAnnAttribute(info, 'Vintage'),
    studio: getStudio(credit),
    genres: getGenres(info),
    themes: getThemes(info),
    image: getImageUrl(info)
  }
  return massaged
}

function getAnnAttribute(info, attribute) {
  if (!info) return null
  const attributeObject = info.find(element => (element.$.type === attribute))
  if (!attributeObject) return null
  return attributeObject._
}

function getImageUrl(info) {
  if (!info) return null
  const imageUrlsList = info[0].img
  if (!imageUrlsList) return null
  return imageUrlsList[imageUrlsList.length - 1].$.src
}

function getAlternativeNames(info) {
  if (!info) return []
  const altTitles = []
  for (let i = 0; i < info.length; i++) {
    if (info[i].$.type === 'Alternative title') {
      altTitles.push(info[i]._)
    }
  }
  return altTitles
}

function getStudio(credit) {
  if (!credit) return null
  const productions = []
  for (let i = 0; i < credit.length; i++) {
    if (credit[i].task[0] === 'Animation Production') {
      productions.push(credit[i].company[0]._)
    }
    else if (credit[i].task[0] === 'Production') {
      productions.push(credit[i].company[0]._)
    }
  }

  if (productions.length > 0) {
    return productions[0]
  }
  else {
    return null
  }
}

function getGenres(info) {
  if (!info) return []
  const genres = []
  for (let i = 0; i < info.length; i++) {
    if (info[i].$.type === 'Genres') {
      genres.push(info[i]._)
    }
  }
  return genres
}

function getThemes(info) {
  if (!info) return []
  const themes = []
  for (let i = 0; i < info.length; i++) {
    if (info[i].$.type === 'Themes') {
      themes.push(info[i]._)
    }
  }
  return themes
}
