import Vue from 'vue'
// 便捷系统配置
const system = {
	// 系统信息
	info: {},
	// 是否为测试环境
	isDebug: !(process.env.NODE_ENV === 'production'),
	// 是否为 iOS
	isIOS: false,
	// 是否为 Android
	isAndroid: false,
	// 是否为 Windows
	isindows: false,
	// 是否为 Mac
	isMac: false,
	// 是否为 Linux
	isLinux: false,
	// 设备像素比（计算的，推荐）(px 与 rpx 的转换比例, 公式：px * pixelRatio = rpx)
	pixelRatio: 0,
	// 设备像素比（固定的）
	pixelRatioFixed: 0,
	// 设备像素比（系统的）
	pixelRatioSystem: 0,
	// 屏幕宽度（屏幕总宽度）
	screenWidth: 0,
	// 屏幕高度（屏幕总高度，包含状态栏、导航栏、页面内容、底部Tabbar）
	screenHeight: 0,
	// 页面宽度
	windowWidth: 0,
	// 页面高度（页面内容高度，不包含状态栏、导航栏，自定义导航栏时，跟 screenHeight 一样高）
	windowHeight: 0,
	// 状态栏高度
	statusBarHeight: 0,
	// 导航栏高度(不包括状态栏，单纯的导航条高度)
	navigationBarHeight: 0,
	// 底部 TabBar 菜单栏高度
	tabBarHeight: 0,
	// 整个导航高度(状态栏 + 导航栏)
	topHeight: 0,
	// 整个底部菜单高度(TabBar + 底部安全区域)
	bottomHeight: 0,
	// 胶囊按钮位置（小程序）
	mbRect: {},

	// ======================================== 配置信息
	
	// 同步当前配置信息
	reload () {
		
		// 默认系统配置（参考：https://uniapp.dcloud.net.cn/api/system/info.html）
		const info = uni.getSystemInfoSync()

		// ---------------------------------------- 公共初始处理
		
		// 系统信息
		this.info = info
		// 是否为 iOS
		this.isIOS = info.osName === 'ios'
		// 是否为 Android
		this.isAndroid = info.osName === 'android'
		// 是否为 Windows
		this.isindows = info.osName === 'windows'
		// 是否为 Mac
		this.isMac = info.osName === 'macos'
		// 是否为 Linux
		this.isLinux = info.osName === 'linux'
		// 设备像素比
		this.pixelRatio = 750 / info.windowWidth
		this.pixelRatioFixed = 2
		this.pixelRatioSystem = info.pixelRatio
		// 屏幕宽度
		this.screenWidth = info.screenWidth
		// 屏幕高度
		this.screenHeight = info.screenHeight
		// 页面宽度
		this.windowWidth = info.windowWidth
		// 页面高度
		this.windowHeight = info.windowHeight
		// 状态栏高度
		this.statusBarHeight = info.statusBarHeight
		// 导航栏高度
		this.navigationBarHeight = 44
		// 底部 TabBar 菜单栏高度
		this.tabBarHeight = 50
		
		// ---------------------------------------- 手机
		
		// iOS 尺寸（参考：http://quanzhan.applemei.com/webStack/TlRnME53PT0=）
		// #ifdef APP-PLUS | MP
		
		// iOS
		if (this.isIOS) {}
		// android
		if (this.isAndroid) {
			// 导航栏高度
			this.navigationBarHeight = 48
		}
		
		// #endif
		
		// ---------------------------------------- APP（暂不支持 APP 配置）
		
		// #ifdef APP-PLUS
		
		// #endif
		
		// ---------------------------------------- 小程序
		
		// #ifdef MP
		
		// 胶囊按钮位置
		this.mbRect = uni.getMenuButtonBoundingClientRect()
		// 导航条高度（暂不使用）
		// this.navigationBarHeight = (this.mbRect.top - this.statusBarHeight) * 2 + this.mbRect.height
		
		// #endif
		
		// ---------------------------------------- 公共收尾处理
		
		// 整个导航高度(状态栏 + 导航栏)
		this.topHeight = this.navigationBarHeight + this.statusBarHeight
		// 屏幕总高度 - 导航高度 - 页面内容高度 = 0（如果不为 0，说明导航栏高度有偏差）
		// console.log(this.screenHeight - this.topHeight - this.windowHeight)
		// 整个底部菜单高度(TabBar + 底部安全区域)
		this.bottomHeight = this.tabBarHeight + this.info.safeAreaInsets.bottom
		
		// 初始化 css var 变量（可以跟系统的一样直接使用，使用参考：src/pages/test/navbar-custom.vue）
		// 使用格式：height: var(key);
		// 使用格式：height: var(key, 默认值可选填);
		const style = `
		  --statusbar-height: ${this.statusBarHeight}px;
			--navigationbar-height: ${this.navigationBarHeight}px;
			--tabbar-height: ${this.tabBarHeight}px;
			--safe-bottom: ${this.info.safeAreaInsets.bottom}px;
			--top-height: ${this.topHeight}px;
			--bottom-height: ${this.bottomHeight}px;
		`
		// 自定义 css var 变量如下：
		// --statusbar-height: 				状态栏高度（系统自带的小程序固定高度为 25px）
		// --navigationbar-height:		导航栏高度
		// --tabbar-height:						TabBar 高度
		// --safe-bottom:							全面屏 TabBar 下面多余的安全区域高度
		// --top-height:							整个导航高度(状态栏 + 导航栏)
		// --bottom-height:						整个底部菜单高度(TabBar + 底部安全区域)
		// 系统自带 css var 变量如下：
		// -–status-bar-height: 			状态栏高度（参考：https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#css-%E5%8F%98%E9%87%8F）
		// -–window-top: 							内容区域距离顶部的距离
		// -–window-bottom: 					内容区域距离底部的距离
		Vue.prototype.$style = style
		// 输出
		console.log('输出 System 信息：', this, style)
	},
	
	// ======================================== 版本更新
	
	// 检查版本及是否更新（小程序）
	update (force = false) {
		
		// ---------------------------------------- 小程序
		
		// #ifdef MP
		
		// 是否支持版本更新
		if (uni.canIUse('getUpdateManager')) {
			// 获取版本更新对象
			var updateManager = uni.getUpdateManager()
			// 检测是否有新版本
			updateManager.onCheckForUpdate((res => {
				// 是否有新版本
				if (res.hasUpdate) {
					// 当新版本下载完成
					updateManager.onUpdateReady(() => {
						uni.showModal({
							title: '更新提示',
							content: '新版本已经准备好，是否重启应用？',
							success: (res) => {
								// 确定重启
								if (res.confirm) {
									// 强制重启使用新版本
									updateManager.applyUpdate()
								}
								// 取消重启 && 强制更新
								if (res.cancel && force) {
									// 重新进入检查
									this.update(force)
								}
							}
						})
					})
					// 当新版本下载失败
					updateManager.onUpdateFailed(() => {
						uni.showModal({
							title: '已经有新版本了哟~',
							content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
							success: (res) => {
								// 强制更新
								if (force) {
									// 重新进入检查
									this.update(force)
								}
							}
						})
					})
				} else {
					// 无新版本
				}
			}))
		}
		
		// #endif
	}
}

// 初始化一遍
system.reload()

// 导出
export default system