<template>
	<view class="content">
		<!-- 视频组件 -->
		<video :src="url" controls></video>
	</view>
</template>

<script>
export default {
	data () {
		return {
			// 视频地址
			url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
			// 视频上下文
			context: undefined
		}
	},
	onReady () {
		
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
</style>
