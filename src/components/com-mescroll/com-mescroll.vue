<template>
	<mescroll-uni
		ref="mescrollRef"
		:fixed="fixed"
		:up="upOption"
		:down="downOption"
		:top="top"
		:safearea="safearea"
		@init="mescrollInit"
		@up="upCallback"
		@down="downCallback"
	>
		<slot></slot>
	</mescroll-uni>
</template>

<script>
import MescrollUni from "mescroll-uni/mescroll-uni.vue"
import MescrollMixin from "mescroll-uni/mescroll-mixins.js"
export default {
	// 参考文档：http://www.mescroll.com/uni.html#begin
	props: {
		// 是否通过 fixed 定位来固定 mescroll-uni 的高度
		fixed: {
			type: Boolean,
			default: () => true
		},
		// 下拉刷新区域往下偏移的距离(支持 "100rpx"、"100px"、"100%" 格式，默认 rpx)
		top: {
			type: Number | String,
			default: 0
		},
		// 上拉刷新区域往下偏移的距离(支持 "100rpx"、"100px"、"100%" 格式，默认 rpx)
		bottom: {
			type: Number | String,
			default: 0
		},
		// bottom 的偏移量是否加上底部安全区的距离
		safearea: {
			type: Boolean,
			default: () => true
		}
	},
	// 使用 mixin
	mixins: [MescrollMixin],
	// 注册组件
	components: {
		MescrollUni
	},
	data() {
		return {
			// 上拉加载配置
			upOption: {
				auto: false,
				textNoMore: '- 没有更多数据了 -'
			},
			// 下拉刷新配置
			downOption: {
				auto: false
			}
		}
	},
	onReady () {
		// 主动下拉加载刷新
		this.mescroll.triggerDownScroll()
	},
	methods: {
		// 下拉加载
		downCallback (options) {
			this.$emit('down', options, this.mescroll)
		},
		// 上拉加载
		upCallback (options) {
			this.$emit('up', options, this.mescroll)
		}
	}
}
</script>

<style>
</style>