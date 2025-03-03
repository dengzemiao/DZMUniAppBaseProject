<template>
	<view class="content">
		<!-- 框架案例 -->
		<u-button type="primary" text="确定"></u-button>
    <u-tabs :list="list1"></u-tabs>
		<u-navbar
			title="个人中心"
			:autoBack="true"
		>
		</u-navbar>
		<navigator url="/pages/test/index"><button>框架案例</button></navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello World!',
			list1: [{
					name: '关注',
			}, {
					name: '推荐',
			}, {
					name: '电影'
			}, {
					name: '科技'
			}, {
					name: '音乐'
			}, {
					name: '美食'
			}, {
					name: '文化'
			}, {
					name: '财经'
			}, {
					name: '手工'
			}]
		}
	},
	methods: {
		click(item) {
				console.log('item', item);
		}
	},
	onLoad () {
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
