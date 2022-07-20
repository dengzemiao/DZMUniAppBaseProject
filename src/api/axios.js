// 接口域名
const BaseHost = 'https://video-weixin-test.hapi123.net'
// 请求封装
export default function ({
	// 请求域名
	host = BaseHost,
	// 请求地址
	url,
	// 请求方式
	method,
	// 请求数据
	data = {},
	// 请求头
	header = {}
}) {
	// 官方请求文档（可查阅传参）https://uniapp.dcloud.io/api/request/request.html
	// 转为 Promise 结构
	return new Promise((resolve, reject) => {
		// 请求对象
		uni.request({
			url: host + url,
			method,
			data,
			header: Object.assign({
				// 默认请求头
				'X-Token': uni.getStorageSync('token')
			}, header),
			success: (res) => {
				// 可以在这里进行成功的公共处理
				resolve(res)
			},
			fail: (err) => {
				// 可以在这里进行失败的公共处理
				reject(err)
			}
		})
	})
}