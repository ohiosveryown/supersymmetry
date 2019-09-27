
    export default [
      {
              path: "/posts/delete2.html",
              meta: {
                __relative: '_posts/delete2.md',
                __pageId: '60c08777'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-delete2-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/delete2.md?saberPage=60c08777")
                
              }
            },
{
              path: "/posts/delete3.html",
              meta: {
                __relative: '_posts/delete3.md',
                __pageId: '60c0fbd6'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-delete3-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/delete3.md?saberPage=60c0fbd6")
                
              }
            },
{
              path: "/posts/mailchimp-atlanta.html",
              meta: {
                __relative: '_posts/mailchimp-atlanta.md',
                __pageId: '494d49b0'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-mailchimp-atlanta-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/mailchimp-atlanta.md?saberPage=494d49b0")
                
              }
            },
{
              path: "/posts/the-oculus.html",
              meta: {
                __relative: '_posts/the-oculus.md',
                __pageId: '2f35a2e7'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-the-oculus-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/the-oculus.md?saberPage=2f35a2e7")
                
              }
            },
{
              path: "/colophon.html",
              meta: {
                __relative: 'colophon.md',
                __pageId: 'fb76bbc6'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--colophon-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/colophon.md?saberPage=fb76bbc6")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.vue',
                __pageId: '01ccd670'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-vue" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/index.vue?saberPage=01ccd670")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]