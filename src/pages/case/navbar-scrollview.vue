<template>
	<view class="content" :style="style">
		<!-- 导航栏 -->
		<com-navbar></com-navbar>
		<!-- 滚动控件（参考：https://uniapp.dcloud.net.cn/component/scroll-view.html） -->
		<scroll-view
			class="page-content-4"
			scroll-y="true"
			:refresher-enabled="isOpenRefresh"
			:refresher-triggered="triggered"
			:refresher-threshold="100"
			refresher-background="lightgreen"
			@refresherpulling="onPulling"
			@refresherrefresh="onRefresh"
			@refresherrestore="onRestore"
			@refresherabort="onAbort"
			:lower-threshold="0"
			@scrolltolower="onTolower"
			@scroll="onScroll"
		>
			<view v-for="(item, index) in 100" :key="index">
				{{ index }}
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data () {
		return {
			// 自定义 CSS 变量
			style: this.$style,
			// 是否开启下拉刷新
			isOpenRefresh: true,
			// true 开始刷新，false 停止刷新
			triggered: false
		}
	},
	methods: {
		// 正在下拉
		onPulling (e) {
			console.log("正在下拉....", e)
		},
		// 开始刷新
		onRefresh () {
			console.log('正在刷新....')
			this.triggered = true
			setTimeout(() => {
				console.log('结束刷新！')
				this.triggered = false
			}, 3000)
		},
		// 刷新完成复位
		onRestore () {
			console.log("下拉刷新已完成复位！")
		},
		// 刷新被终止
		onAbort () {
			console.log('下拉刷新被中止！')
		},
		// 上拉加载
		onTolower () {
			// 可以自定义一个底部配合使用
			// 注意判断加载状态，防止重复多次加载...
			console.log('正在加载更多....')
		},
		// 滚动变化
		onScroll (e) {
			console.log('正在滚动....', e)
		},
		// 返回上一页
		touchBack () {
			uni.navigateBack()
		}
	}
}
</script>

<style>
</style>
