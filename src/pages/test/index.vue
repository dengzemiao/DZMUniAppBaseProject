<template>
	<view class="content">
		<!-- 请求案例 -->
		<navigator url="/pages/test/request"><button>请求案例</button></navigator>
		<!-- 上传案例 -->
		<navigator url="/pages/test/upload"><button>上传案例</button></navigator>
		<!-- 组件案例 -->
		<navigator url="/pages/test/component"><button>组件案例（easycom）</button></navigator>
		<!-- 使用 system.js -->
		<navigator url="/pages/test/system"><button>系统配置封装（system.js）</button></navigator>
	</view>
</template>

<script>
export default {
	onLoad() {
		// 用于测试的用户 token
		uni.setStorageSync('token', '4f605c112594fb5a954e40c061c90d9e')
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
