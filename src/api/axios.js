import Pub from '@/common/public.js'

// #ifdef H5
const BaseHost = '/api'
// #endif

// #ifndef H5
const BaseHost = 'http://api.video.test.netjoy.com'
// #endif

// ===================================================== 请求

// 官方请求文档可查阅传参）https://uniapp.dcloud.io/api/request/request.html
	
// 请求接口封装（返回 Promise 对象）
export function axios ({
	// 请求域名
	host = BaseHost,
	// 请求地址
	url,
	// 请求方式
	method,
	// 请求数据
	data,
	// 请求头
	header
}) {
	// 转为 Promise 结构
	return new Promise((resolve, reject) => {
		// 请求对象
		uni.request({
			url: host + url,
			method,
			data,
			header: Object.assign({
				// 默认请求头
				'X-Token': Pub.ACCESS_TOKEN()
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

// ===================================================== 上传

// 官方上传文档（可查阅传参）https://uniapp.dcloud.io/api/request/network-file.html

// 便捷上传封装（返回 Promise 对象）
export function uploadFile (configs) {
	// 转为 Promise 结构
	return new Promise((resolve, reject) => {
		// 上传对象
		uploadFileTask({
			...configs,
			success: (res) => { resolve(res) },
			fail: (err) => { reject(err) }
		})
	})
}

// 基础上传封装（返回 uploadTask 对象）
export function uploadFileTask ({
	// 上传域名
	host = BaseHost,
	// 上传地址
	url = '/mobile/wxa/upload',
	// (files 与 filePath 二选一即可)
	// 需要上传的文件列表，使用 files 时，filePath 和 name 不生效
	files,
	// 要上传文件资源的路径
	filePath,
	// 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
	name,
	// 请求头
	header,
	// 上传成功
	success,
	// 上传失败
	fail,
}) {
	// 上传对象
	return uni.uploadFile({
		url: host + url,
		files,
		filePath,
		name,
		header: Object.assign({
			// 默认请求头
			'X-Token': Pub.ACCESS_TOKEN()
		}, header),
		success: (res) => {
			// 可以在这里进行成功的公共处理
			if (success) { success(res) }
		},
		fail: (err) => {
			// 可以在这里进行失败的公共处理
			if (fail) { fail(err) }
		}
	})
}