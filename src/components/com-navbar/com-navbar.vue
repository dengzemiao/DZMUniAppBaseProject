<template>
	<view class="com-navbar">
		<view class="navbar-content">
			<u-navbar
				:title="title"
				:leftIconSize="leftIconShow ? leftIconSize : 0"
				:autoBack="true"
			>
			</u-navbar>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 标题
		title: {
			type: String,
			default: ''
		},
		// 是否显示左侧图标
		leftIconShow: {
			type: Boolean,
			default: true
		},
		// 左侧图标的大小
		leftIconSize: {
			type: Number | String,
			default: 40
		}
	}
	// data() {
	// 	return {
	// 		// 标题内容
	// 		// titleText: '',
	// 		// 当前页面队列
	// 		// pages: [],
	// 		// 当前页面
	// 		// page: {},
	// 		// 是否为队列第一页
	// 		// isFirst: false
	// 	}
	// },
	// created () {
	// 	// 获取当前队列所有页面
	// 	this.pages = getCurrentPages()
	// 	// 是否为队列第一页
	// 	this.isFirst = this.pages.length === 1
	// 	// 页面标题（固定获取）
	// 	// this.titleText = this.title
	// 	// 获取列队最后一个页面，也就是当前页面
	// 	this.page = this.pages[this.pages.length - 1]
	// 	// 页面标题（自动获取，只有 H5 生效）
	// 	this.titleText = this.title || this.page.$holder.navigationBarTitleText
	// },
	// methods: {
	// 	leftClick () {
	// 		// 不是第一页
	// 		if (!this.isFirst) {
	// 			// 返回上一页
	// 			uni.navigateBack({ delta: 1 })
	// 		}
	// 	}
	// }
}
</script>

<style>
.com-navbar {
	position: fixed;
	left: 0;
	top: 0;
	padding-top: var(--statusbar-height);
	width: 100vw;
	z-index: 100;
	background-color: rgba(255, 0, 0, 0.3);
}
.navbar-content {
	display: flex;
	align-items: center;
	width: 100%;
	height: var(--navigationbar-height);
	background-color: rgba(0, 0, 255, 0.3);
}
</style>
