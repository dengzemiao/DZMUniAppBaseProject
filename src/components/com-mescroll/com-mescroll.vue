<template>
	<mescroll-uni
		ref="mescrollRef"
		:fixed="fixed"
		:up="upOption"
		:down="downOption"
		:top="top === -1 ? system.topHeight + 'px' : top"
		:bottom="bottom"
		:safearea="safearea"
		@init="init"
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
		// -1：自适应顶部导航栏 + 状态栏高度，非 -1 则为自定义高度
		top: {
			type: Number | String,
			default: -1
		},
		// 上拉刷新区域往下偏移的距离(支持 "100rpx"、"100px"、"100%" 格式，默认 rpx)
		bottom: {
			type: Number | String,
			default: 0
		},
		// bottom 的偏移量是否加上底部安全区的距离
		safearea: {
			type: Boolean,
			default: () => false
		}
	},
	// 使用 mixin
	mixins: [MescrollMixin],
	// 注册组件
	components: {
		MescrollUni
	},
	data () {
		return {
			// 系统信息
			system: this.$system,
			// 上拉加载配置
			upOption: {
				auto: false,
				textNoMore: '- 没有更多数据了 -',
				page: { size: 1 },
				noMoreSize: 1,
				empty: { use: false }
			},
			// 下拉刷新配置
			downOption: {
				auto: false
			}
		}
	},
	methods: {
		// 初始化
		init (mescroll) {
			this.mescrollInit(mescroll)
			this.$emit('init', this.mescroll)
		},
		// 下拉加载
		downCallback (mescroll) {
			this.$emit('down', mescroll)
		},
		// 上拉加载
		upCallback (mescroll) {
			this.$emit('up', mescroll)
		}
	}
}
</script>

<style>
</style>