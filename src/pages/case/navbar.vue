<template>
	<view class="content">
		<view v-for="(item, index) in 100" :key="index">
			{{ index }}
		</view>
	</view>
</template>

<script>
export default {
	// 上下拉加载
	onLoad (options) {
		// 开始下拉加载
		uni.startPullDownRefresh()
	},
	// 下拉加载（参考：https://uniapp.dcloud.net.cn/api/ui/pulldown.html）
	onPullDownRefresh () {
		console.log('正在刷新....')
		setTimeout(function () {
			// 结束下拉加载
			console.log('结束刷新！')
			uni.stopPullDownRefresh()
		}, 1000)
	},
	// 上拉加载（加载更多插件可以参考：https://uniapp.dcloud.net.cn/component/uniui/uni-load-more.html）
	// 系统会保证超出一屏才会有加载更多回调，否则默认不会触发
	onReachBottom() {
		// 可以自定义一个底部配合使用
		// 注意判断加载状态，防止重复多次加载...
		console.log('正在加载更多....')
	}
}
</script>

<style>
</style>
