export default {
  name: 'quiz',
  title: 'Quiz',
  type: 'document',
  description:
    'A list of questions along with possible answers (choices). Play a Quiz by creating a Match',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'question'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}