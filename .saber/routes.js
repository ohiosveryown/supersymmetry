
    export default [
      {
              path: "/posts/daxing-airport.html",
              meta: {
                __relative: '_posts/daxing-airport.md',
                __pageId: '230b9e90'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-daxing-airport-md" */ "/Users/mpence/Desktop/development/supersymmetry/pages/_posts/daxing-airport.md?saberPage=230b9e90")
                
              }
            },
{
              path: "/posts/milan-house.html",
              meta: {
                __relative: '_posts/milan-house.md',
                __pageId: 'c4cbb6b6'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-milan-house-md" */ "/Users/mpence/Desktop/development/supersymmetry/pages/_posts/milan-house.md?saberPage=c4cbb6b6")
                
              }
            },
{
              path: "/posts/riverside-high-school.html",
              meta: {
                __relative: '_posts/riverside-high-school.md',
                __pageId: 'c280ac80'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-riverside-high-school-md" */ "/Users/mpence/Desktop/development/supersymmetry/pages/_posts/riverside-high-school.md?saberPage=c280ac80")
                
              }
            },
{
              path: "/posts/the-oculus.html",
              meta: {
                __relative: '_posts/the-oculus.md',
                __pageId: '236d11d0'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-the-oculus-md" */ "/Users/mpence/Desktop/development/supersymmetry/pages/_posts/the-oculus.md?saberPage=236d11d0")
                
              }
            },
{
              path: "/colophon.html",
              meta: {
                __relative: 'colophon.md',
                __pageId: '5da3cdd8'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--colophon-md" */ "/Users/mpence/Desktop/development/supersymmetry/pages/colophon.md?saberPage=5da3cdd8")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.vue',
                __pageId: '2ddb4502'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-vue" */ "/Users/mpence/Desktop/development/supersymmetry/pages/index.vue?saberPage=2ddb4502")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/mpence/Desktop/development/supersymmetry/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]