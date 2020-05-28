export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5ecf1a3ad5b1e9847a1e6695',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ock7f2d5',
                  apiId: 'e28e8a91-4d0d-406d-82ad-c447b8bbc4fa'
                },
                {
                  buildHookId: '5ecf1a3af94464885af65d9a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-t2pv2uz2',
                  apiId: '3ff5fc06-7c3c-45c5-b928-561077102a1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LEMSingapore/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-t2pv2uz2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
