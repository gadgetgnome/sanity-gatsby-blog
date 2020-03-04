export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5f9f0428d8d636c1946f31',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-c81hcj6n',
                  apiId: '9e4b3857-7e6f-4a16-8a69-d8b65b83d816'
                },
                {
                  buildHookId: '5e5f9f043659d129d6f96709',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-nsnhgxia',
                  apiId: 'bd814b17-34a3-48c2-8060-bdc7989fb977'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gadgetgnome/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-nsnhgxia.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
