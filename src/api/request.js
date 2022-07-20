import axios from './axios.js'

// 获取用户信息
export function getUserInfo (params) {
	return axios({
		url: '/mobile/user/userinfo',
		method: 'GET',
		data: params
	})
}