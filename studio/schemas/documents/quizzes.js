export default {
  type: 'document',
  name: 'quizzes',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'language',
      type: 'reference',
      to: [{ type: 'languages' }]
    },
    {
      name: 'assignments',
      type: 'array',
      of: [{ type: 'assignment' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      lanCode: 'language.language.code'
    },
    prepare(selection) {
      return { title: `${selection.title}! (${selection.lanCode})` }
    }
  }
}
