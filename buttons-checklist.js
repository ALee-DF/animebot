module.exports.buttonsChecklist = {
  text: 'Select the genres of anime you want to watch \\(^o^)/',
  attachments: [
    {
      fallback: 'You are unable to choose a genre',
      callback_id: 'genre',
      color: '#3AA3E3',
      attachment_type: 'default',
      actions: [
        {
          name: 'action',
          text: 'Action',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'adventure',
          text: 'Adventure',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'comedy',
          text: 'Comedy',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'drama',
          text: 'Drama',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'fantasy',
          text: 'Fantasy',
          type: 'button',
          value: 'deselected',
          style: 'default'
        }
      ]
    },
    {
      fallback: 'You are unable to choose a genre',
      callback_id: 'genre',
      color: '#3AA3E3',
      attachment_type: 'default',
      actions: [
        {
          name: 'horror',
          text: 'Horror',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'magic',
          text: 'Magic',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'mystery',
          text: 'Mystery',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'psychological',
          text: 'Psychological',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'romance',
          text: 'Romance',
          type: 'button',
          value: 'deselected',
          style: 'default'
        }
      ]
    },
    {
      fallback: 'You are unable to choose a genre',
      callback_id: 'genre',
      color: '#3AA3E3',
      attachment_type: 'default',
      actions: [
        {
          name: 'science fiction',
          text: 'Science Fiction',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'slice of life',
          text: 'Slice of Life',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'supernatural',
          text: 'Supernatural',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'thriller',
          text: 'Thriller',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'tournament',
          text: 'Tournament',
          type: 'button',
          value: 'deselected',
          style: 'default'
        }
      ]
    }
  ]
}
