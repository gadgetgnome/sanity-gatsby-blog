export default {
  type: 'document',
  name: 'languages',
  title: 'Languages',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'languageObject'
    }
  ],
  preview: {
    select: {
      title: 'language.name',
      subtitle: 'language.code'
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return { title: `${title} (${subtitle})` }
    }
  }
}
