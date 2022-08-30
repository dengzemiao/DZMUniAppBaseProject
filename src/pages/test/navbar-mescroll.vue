<template>
	<view class="content" :style="style">
		<!-- 导航栏 -->
		<com-navbar></com-navbar>
		<!-- 页面内容 -->
		<view class="page-content-1">
			<com-mescroll
				:top="system.topHeight + 'px'"
				@up="upCallback"
				@down="downCallback"
			>
				<view v-for="(item, index) in dataSource" :key="index">
					{{ index }}
				</view>
			</com-mescroll>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 系统信息
			system: this.$system,
			// 自定义 CSS 变量
			style: this.$style,
			// 数据源
			dataSource: []
		}
	},
	methods: {
		// 下拉加载
		downCallback (options, mescroll) {
			console.log('-------- 下拉加载数据 --------', mescroll)
			this.getData(false, mescroll)
		},
		// 上拉加载
		upCallback (options, mescroll) {
			console.log('-------- 上拉加载数据 --------', mescroll)
			this.getData(true, mescroll)
		},
		// 获取数据
		getData (isMore, mescroll) {
			setTimeout(() => {
				if (!isMore) {
					this.dataSource = []
				}
				const count = 50
				const total = 120
				const num = this.dataSource.length
				const list = []
				for (var i = 0; i < count; i++) {
					list.push(num + i)
				}
				this.dataSource = this.dataSource.concat(list)
				if (mescroll) {
					// mescroll.endSuccess(dataSize, hasNext, systime)
					// 隐藏下拉刷新和上拉加载的状态, 在联网获取数据成功后调用
					// dataSize : 当前页获取的数据量(注意是当前页)
					// hasNext : 是否有下一页数据true/false
					// systime : 加载第一页数据的服务器时间 (可空)
					mescroll.endSuccess(count, this.dataSource.length < total)
					// mescroll.endErr()
				}
				console.log(this.dataSource)
				console.log('-------- 加载结束 --------', mescroll)
			}, 3000)
		}
	}
}
</script>

<style>
</style>
