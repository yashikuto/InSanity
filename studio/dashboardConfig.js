export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5def3a390e8d60cfac241691',
                  title: 'Sanity Studio',
                  name: 'InSanity-studio-wv6a3mgd',
                  apiId: 'fe6211f8-e79b-48c0-83c9-a6da76c5f21b'
                },
                {
                  buildHookId: '5def3a3ac3cc96d73c1c6475',
                  title: 'Landing pages Website',
                  name: 'InSanity-web-i9ajf5un',
                  apiId: 'd78fdfa5-42d1-4e96-9af6-8a66b0631d06'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yashikuto/InSanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://InSanity-web-i9ajf5un.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
