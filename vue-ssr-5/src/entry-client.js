/**
 * 挂载dom，其实是激活dom，使得页面可交互，
 * dom已经在server端返回了，没有必要销毁重建
 */
import { createApp } from './app'

const { app } = createApp()

// This assumes App.vue template root element has `id="app"`
app.$mount('#app')