
    export default [
      {
              path: "/posts/daxing-airport.html",
              meta: {
                __relative: '_posts/daxing-airport.md',
                __pageId: '0767cc27'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-daxing-airport-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/daxing-airport.md?saberPage=0767cc27")
                
              }
            },
{
              path: "/posts/lake-hawea.html",
              meta: {
                __relative: '_posts/lake-hawea.md',
                __pageId: '304f21b0'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-lake-hawea-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/lake-hawea.md?saberPage=304f21b0")
                
              }
            },
{
              path: "/posts/milan-house.html",
              meta: {
                __relative: '_posts/milan-house.md',
                __pageId: '0ae3b66e'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-milan-house-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/milan-house.md?saberPage=0ae3b66e")
                
              }
            },
{
              path: "/posts/riverside-high-school.html",
              meta: {
                __relative: '_posts/riverside-high-school.md',
                __pageId: '35985449'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-riverside-high-school-md" */ "/Users/pence/Desktop/projects/supersymmetry/supersymmetry-2020/pages/_posts/riverside-high-school.md?saberPage=35985449")
                
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