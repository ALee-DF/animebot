module.exports = function renderAnimeRecommendation(animeData) {
  return {
    text: 'Here\'s your anime Recommendation!',
    attachments: [
      {
        title: animeData.name,
        image_url: animeData.image
      },
      {
        fields: [
          {
            title: 'Type',
            value: animeData.type,
            short: true
          },
          {
            title: 'Episodes',
            value: animeData.episodes,
            short: true
          },
          {
            title: 'Release Date',
            value: animeData.releaseDate,
            short: true
          },
          {
            title: 'Duration',
            value: animeData.duration,
            short: true
          },
          {
            title: 'Genres',
            value: animeData.genres.join(', '),
            short: true
          },
          {
            title: 'Themes',
            value: animeData.themes.join(', '),
            short: true
          },
          {
            title: 'Studio',
            value: animeData.studio,
            short: true
          },
          {
            title: 'Rating',
            value: animeData.score,
            short: true
          }
        ]
      },
      {
        title: 'Synopsis',
        text: animeData.synopsis
      }
    ]
  }
}
