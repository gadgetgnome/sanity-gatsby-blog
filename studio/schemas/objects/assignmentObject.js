export default {
  type: 'object',
  name: 'assignment',
  fields: [
    {
      name: 'heading',
      type: 'string'
    },
    {
      name: 'type',
      type: 'reference',
      to: [{ type: 'assignmentTypes' }]
    }
  ]
}
