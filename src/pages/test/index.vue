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
		<!-- 视频案例 -->
		<navigator url="/pages/test/video"><button>视频案例</button></navigator>
		<!-- 系统导航栏 -->
		<navigator url="/pages/test/navbar"><button>系统导航栏（上下拉加载，所有平台都兼容）</button></navigator>
		<!-- 自定义导航栏 -->
		<navigator url="/pages/test/navbar-scrollview"><button>自定义导航栏（上下拉加载 scrollview，部分小程序上不兼容）</button></navigator>
		<!-- 自定义导航栏 -->
		<navigator url="/pages/test/navbar-mescroll"><button>自定义导航栏（上下拉加载 mescroll 插件，同时也支持系统刷新调用，所有平台都兼容）</button></navigator>
	</view>
</template>
  
<script>
import Pub from '@/common/public.js'
export default {
	onLoad() {
		// 用于测试的用户 token
		Pub.ACCESS_TOKEN('4f605c112594fb5a954e40c061c90d9e')
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
