export default {
  type: 'object',
  name: 'languageObject',
  fields: [
    {
      name: 'name',
      title: 'Language Name',
      type: 'string'
    },
    {
      name: 'code',
      title: 'ISO 639-1 Language Code',
      type: 'string',
      description: 'Eg. nb'
    }
  ]
}
