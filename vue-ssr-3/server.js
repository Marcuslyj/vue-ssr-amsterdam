const server = require('express')()
const renderVueApp = require('./render-vue-app')

// server监听客户端请求， 返回html
server.get('*', renderVueApp)

server.listen(3000)
console.log('Server listening on http://localhost:3000')