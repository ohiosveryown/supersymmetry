
    export default [
      {
              path: "/posts/testone.html",
              meta: {
                __relative: '_posts/testone.md',
                __pageId: 'e3e9d8ac'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-testone-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/testone.md?saberPage=e3e9d8ac")
                
              }
            },
{
              path: "/posts/testtwo.html",
              meta: {
                __relative: '_posts/testtwo.md',
                __pageId: 'd1d2a3f8'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-testtwo-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/testtwo.md?saberPage=d1d2a3f8")
                
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