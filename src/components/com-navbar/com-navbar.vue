<template>
	<view class="com-navbar">
		<view class="navbar-content">
			<button size="mini" @click="touchBack">返回</button>
		</view>
	</view>
</template>

<script>
export default {
	methods: {
		// 返回上一页
		touchBack () {
			uni.navigateBack()
		}
	}
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