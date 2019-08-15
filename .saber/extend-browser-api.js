
      

      var themeBrowserApi
      var rTheme = require.context('#theme', false, /\.\/saber-browser\.[jt]s$/)
      rTheme.keys().forEach(function (k) {
        themeBrowserApi = rTheme(k).default
      })

      export default function (context) {
        
        typeof themeBrowserApi === 'function' && themeBrowserApi(context)
      }