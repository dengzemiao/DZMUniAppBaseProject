<template>
	<view class="content">
		<!-- 上传文件 -->
		<button @click="touchButton" :loading="isLoading">上传文件</button>
	</view>
</template>

<script>
// 上传接口
import { uploadFile } from '@/api/axios.js'
export default {
	data () {
		return {
			isLoading: false
		}
	},
	methods: {
		touchButton () {
			// 打开文件选择器
			uni.chooseImage({
				// 打开并选取成功
				success: (chooseImageRes) => {
					// 进入加载
					this.isLoading = true
					// 选择的文件（可能存在多选）
					const tempFilePaths = chooseImageRes.tempFilePaths
					// 上传单选文件
					uploadFile({ filePath: tempFilePaths[0], name: 'file' }).then(res => {
						this.isLoading = false
						uni.showToast({ title: '上传成功，详情看控制台', icon: 'none' })
						console.log(res)
					}).catch(err => {
						this.isLoading = false
						uni.showToast({ title: '上传失败，详情看控制台', icon: 'none' })
						console.log(err)
					})
				},
				// 打开失败或选取失败
				fail: (err) => {
					uni.showToast({ title: '获取失败，详情看控制台', icon: 'none' })
					console.log(err)
				}
			})
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
