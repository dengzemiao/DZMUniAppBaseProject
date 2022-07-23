<template>
	<view class="content">
	</view>
</template>

<script>
// 导入系统文件
import System from '@/utils/system.js'
export default {
	onLoad () {
		// 输出
		console.log(System)
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
</style>
