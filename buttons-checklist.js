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
          name: 'erotica',
          text: 'Erotica',
          type: 'button',
          value: 'deselected',
          style: 'default',
          confirm: {
            title: 'Are you a legal adult?',
            text: 'This genre contains pornographic content that is not ' +
              'suitable for underaged users. If you are a legal adult, ' +
              'proceed at your own risk.',
            ok_text: 'Yes',
            dismiss_text: 'No'
          }
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
          name: 'fantasy',
          text: 'Fantasy',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
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
          name: 'romance',
          text: 'Romance',
          type: 'button',
          value: 'deselected',
          style: 'default'
        },
        {
          name: 'science fiction',
          text: 'Science Fiction',
          type: 'button',
          value: 'deselected',
          style: 'default',
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
