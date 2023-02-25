<template>
	<view class="content">
		<!-- 框架案例 -->
		<navigator url="/pages/test/index"><button>框架案例</button></navigator>
	</view>
</template>

<script>
export default {
	data () {
		return {
			title: 'Hello World!'
		}
	},
	onLoad () {
	},
	methods: {
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
