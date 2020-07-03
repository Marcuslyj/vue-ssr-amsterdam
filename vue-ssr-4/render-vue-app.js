// 可以资源注入
const { createBundleRenderer } = require('vue-server-renderer')
// html模板
const template = require('fs').readFileSync('./src/index.template.html', 'utf-8')
// 这是做什么的？
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

// 创建renderer，资源注入
const renderer = createBundleRenderer(serverBundle, {
	template,
	clientManifest
})

module.exports = async (req, res) => {
	try {
		const context = { url: req.url }
		const html = await renderer.renderToString(context)

		res.send(html)
	} catch (err) {
		res.status(500).end(err.message)
	}
}