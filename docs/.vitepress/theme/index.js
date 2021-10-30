// interface Theme {
//     Layout: Component // Vue 3 component
//     NotFound?: Component
//     enhanceApp?: (ctx: EnhanceAppContext) => void
//   }

//   interface EnhanceAppContext {
//     app: App // Vue 3 app instance
//     router: Router // VitePress router instance
//     siteData: Ref<SiteData>
//   }
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('MyGlobalComponent' /* ... */)
  }
}