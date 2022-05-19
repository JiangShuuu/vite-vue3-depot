import { createApp } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apollo-client'
import './index.css'
import router from './router/index'


const app = createApp(App)
app.use(router)
app.provide(DefaultApolloClient, apolloClient)
app.mount('#app')
// createApp(App)
//   .provide(DefaultApolloClient, apolloClient)
//   .use(router)
//   .mount('#app')
