<template>
	<view class="content">
		<!-- 导航栏 -->
		<navbar title="组件（easycom）"></navbar>
		<!-- easycom 组件 -->
		<test-easycom></test-easycom>
	</view>
</template>

<script>
// 组件支持 easycom（参考：https://uniapp.dcloud.io/collocation/pages.html#easycom）
// 默认是开启的，如果需要自定义支持文件夹，可以在 pages.json 文件中进行配置
export default {
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
