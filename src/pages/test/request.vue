<template>
	<view class="content">
		<!-- 发起请求 -->
		<button @click="touchButton" :loading="isLoading">发起请求</button>
	</view>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/request.js'
export default {
	data() {
		return {
			isLoading: false
		}
	},
	methods: {
		touchButton () {
			
			// 进入加载
			this.isLoading = true
			
			// 测试请求
			getUserInfo().then(res => {
				uni.showToast({ title: '请求成功，详情看控制台', icon: 'none' })
				this.isLoading = false
				console.log(res)
			}).catch(err => {
				uni.showToast({ title: '请求失败，详情看控制台', icon: 'none' })
				this.isLoading = false
				console.log(err)
			})
			
			// 直接调用请求
			// uni.request({
			// 	url: '/api' + '/mobile/user/userinfo',
			// 	method: 'GET',
			// 	data: {},
			// 	header: {
			// 		'X-Token': uni.getStorageSync('token')
			// 	},
			// 	success: (res) => {
			// 		uni.showToast({ title: '请求成功，详情看控制台', icon: 'none' })
			// 		this.isLoading = false
			// 		console.log(res)
			// 	},
			// 	fail: (err) => {
			// 		uni.showToast({ title: '请求失败，详情看控制台', icon: 'none' })
			// 		this.isLoading = false
			// 		console.log(err)
			// 	}
			// })
		}
	}
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
button {
	margin-top: 30rpx;
	width: calc(100vw - 50rpx);
}
</style>
