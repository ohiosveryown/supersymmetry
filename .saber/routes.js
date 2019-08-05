
    export default [
      {
              path: "/posts/hello.html",
              meta: {
                __relative: '_posts/hello.md',
                __pageId: '7f8c8628'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-hello-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/hello.md?saberPage=7f8c8628")
                
              }
            },
{
              path: "/posts/lalac.html",
              meta: {
                __relative: '_posts/lalac.md',
                __pageId: 'e8f5e736'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-lalac-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/lalac.md?saberPage=e8f5e736")
                
              }
            },
{
              path: "/about.html",
              meta: {
                __relative: 'about.md',
                __pageId: '7ad1997a'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--about-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/about.md?saberPage=7ad1997a")
                
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