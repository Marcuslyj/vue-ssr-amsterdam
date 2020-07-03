/**
 * 根据url，创建匹配组件，并返回
 */
import { createApp } from './app'

export default (context) => {
	// Return a new Promise here
	return new Promise((resolve, reject) => {
		const { app, router, store } = createApp(context)

		router.push(context.url)
		router.onReady(() => {
			// 匹配组件
			const matchedComponents = router.getMatchedComponents()

			// no matched routes, send back 404
			if (!matchedComponents.length) {
				return reject({ code: 404 })
			}

			resolve(app)
		})
	})
}