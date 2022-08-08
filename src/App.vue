<script>
import Vue from 'vue'
import system from '@/common/system.js'
export default {
	onLaunch: function() {
		console.log('App Launch')
		this.initData()
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	},
	methods: {
		// 初始化
		initData () {
			// 初始化 css var 变量，需要支持 Sass 才可以使用（参考：src/common/common.css）
			// 使用格式：height: var(key);
			// 使用格式：height: var(key, 默认值可选填);
			const style = `
			  --statusbar-height: ${system.navigationHeight}px;
				--navigationbar-height: ${system.navigationBarHeight}px;
				--navigation-height: ${system.navigationHeight}px;
				--tabbar-height: ${system.tabBarHeight}px;
				--safe-bottom: ${system.info.safeAreaInsets.bottom}px;
			`
			// 自定义 css var 变量如下：
			// --statusbar-height: 				状态栏高度（系统自带的小程序固定高度为 25px）
			// --navigationbar-height:		导航栏高度
			// --navigation-height:				导航高度（状态栏 + 导航栏）
			// --tabbar-height:						TabBar高度
			// --safe-bottom:							全面屏TabBar下面多余的安全区域高度
			// 系统自带 css var 变量如下：
			// -–status-bar-height: 			状态栏高度（参考：https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#css-%E5%8F%98%E9%87%8F）
			// -–window-top: 							内容区域距离顶部的距离
			// -–window-bottom: 					内容区域距离底部的距离
			console.log('输出 System 信息：', system, style)
			Vue.prototype.$style = style
		}
	}
}
</script>

<style>
/*每个页面公共css */
@import 'common/common.css';
</style>
git pu