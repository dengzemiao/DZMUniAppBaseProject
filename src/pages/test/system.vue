<template>
	<view class="content">
		<!-- 系统信息 -->
		<button @click="touchLog">系统信息</button>
		<!-- 检查更新 -->
		<button @click="touchCheck">检查更新</button>
	</view>
</template>

<script>
// 导入系统文件
import system from '@/utils/system.js'
export default {
	methods: {
		// 输出系统信息
		touchLog () {
			console.log(system)
			uni.showToast({ title: '输出成功，详情看控制台', icon: 'none' })
		},
		// 检查是否有新版本，是否需要进行更新
		touchCheck () {
			// 正常更新 
			system.update()
			// 强制更新
			// system.update({ force: true })
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
