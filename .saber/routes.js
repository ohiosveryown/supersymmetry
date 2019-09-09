
    export default [
      {
              path: "/posts/delete.html",
              meta: {
                __relative: '_posts/delete.md',
                __pageId: '2b4e79be'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-delete-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/delete.md?saberPage=2b4e79be")
                
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
              path: "/",
              meta: {
                __relative: 'index.vue',
                __pageId: '01ccd670'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-vue" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/index.vue?saberPage=01ccd670")
                
              }
            },
{
              path: "/colophon.html",
              meta: {
                __relative: 'colophon.vue',
                __pageId: '73607480'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--colophon-vue" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/colophon.vue?saberPage=73607480")
                
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