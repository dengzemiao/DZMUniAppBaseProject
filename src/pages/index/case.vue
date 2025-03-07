<template>
	<view class="content">
		<!-- 框架案例 -->
		<navigator url="/pages/case/index"><button>框架案例</button></navigator>
		<!-- uni-ui -->
		<uni-badge text="1"></uni-badge>
		<uni-badge text="2" type="success" @click="bindClick"></uni-badge>
		<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
	</view>
</template>

<script>
// 组件演示文档：https://ext.dcloud.net.cn/plugin?id=55 文档里面找一下，在下面点
// npm 安装文档：https://www.npmjs.com/package/@dcloudio/uni-ui
// 因为已经在 pages.json 中注册了 easycom 组件，所有不需要单个引入了
// import {uniBadge} from '@dcloudio/uni-ui'

export default {
	// components: {
	// 	uniBadge
	// },
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
