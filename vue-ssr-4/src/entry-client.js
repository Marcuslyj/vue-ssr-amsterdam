import { createApp } from './app'

const { app } = createApp()

// This assumes App.vue template root element has `id="app"`
// 客户端激活
app.$mount('#app')