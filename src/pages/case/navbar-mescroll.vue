<template>
	<view class="content" :style="style">
		<!-- 导航栏 -->
		<com-navbar></com-navbar>
		<!-- 页面内容（组件默认为 fixed 布局，所以只需要控制顶部底部间距即可，支持取消 fixed 布局方式） -->
		<com-mescroll
			@init="mescrollInit"
			@up="upCallback"
			@down="downCallback"
		>
			<view v-for="(item, index) in dataSource" :key="index">
				{{ index }}
			</view>
		</com-mescroll>
	</view>
</template>

<script>
export default {
	data () {
		return {
			// 自定义 CSS 变量
			style: this.$style,
			// 数据源
			dataSource: [],
			// 刷新对象
			mescroll: undefined
		}
	},
	methods: {
		// 初始化刷新组件
		mescrollInit (mescroll) {
			console.log('-------- 初始化刷新组件 --------', mescroll)
			// 记录
			this.mescroll = mescroll
			// 主动下拉加载刷新
			this.mescroll.triggerDownScroll()
		},
		// 下拉加载
		downCallback (mescroll) {
			console.log('-------- 下拉加载数据 --------', mescroll)
			this.getData(false)
		},
		// 上拉加载
		upCallback (mescroll) {
			console.log('-------- 上拉加载数据 --------', mescroll)
			this.getData(true)
		},
		// 获取数据
		getData (isMore) {
			setTimeout(() => {
				if (!isMore) {
					// 重置页码（也可以记录页码，否者在多拉几次后，框架内页码不正确会导致错乱）
					this.mescroll.setPageNum(1)
					// 清空数据
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
				// mescroll.endSuccess(dataSize, hasNext, systime)
				// 隐藏下拉刷新和上拉加载的状态, 在联网获取数据成功后调用
				// dataSize : 当前页获取的数据量(注意是当前页)
				// hasNext : 是否有下一页数据true/false
				// systime : 加载第一页数据的服务器时间 (可空)
				this.mescroll.endSuccess(count, this.dataSource.length < total)
				// this.mescroll.endErr()
				console.log(this.dataSource)
				console.log('-------- 加载结束 --------', this.mescroll)
			}, 3000)
		}
	}
}
</script>

<style>
</style>
