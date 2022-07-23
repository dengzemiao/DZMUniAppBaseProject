// 默认系统配置（参考：https://uniapp.dcloud.net.cn/api/system/info.html）
const info = uni.getSystemInfoSync()

// =================== 公共系统属性

// 便捷系统配置
const system = {
	// 系统信息
	info: info,
	// 胶囊按钮位置（小程序）
	mbRect: null,
	// 是否为 iOS
	isIOS: info.osName === 'ios',
	// 是否为 Android
	isAndroid: info.osName === 'android',
	// 是否为 Windows
	isindows: info.osName === 'windows',
	// 是否为 Mac
	isMac: info.osName === 'macos',
	// 是否为 Linux
	isLinux: info.osName === 'linux',
	// 设备像素比 (px 与 rpx 的转换比例, 公式：px * pixelRatio = rpx)
	pixelRatio: info.pixelRatio,
	// 设备像素比（在手机上系统自带的比例好像有点不对，所以可以使用自己换算出来的比例）
	pixelRatioPro: 1.0,
	// 屏幕宽度
	screenWidth: info.screenWidth,
	screenHeightRPX: 0,
	// 屏幕高度
	screenHeight: info.screenHeight,
	screenHeightRPX: 0,
	// 状态栏高度
	statusBarHeight: info.statusBarHeight,
	statusBarHeightRPX: 0,
	// 导航栏高度(不包括状态栏，单纯的导航栏高度)
	navigationBarHeight: 0,
	navigationBarHeightRPX: 0,
	// 导航栏高度(包括状态栏，整个导航栏高度)
	navigationHeight: 0,
	navigationHeightRPX: 0,
	// 底部 TabBar 菜单栏高度
	tabBarHeight: 0,
	tabBarHeightRPX: 0
}

// =================== 针对公共系统属性处理

// 当前使用的像素比例（可以更具平台进行调整）
const pixelRatio = system.pixelRatio
// 屏幕宽度
system.screenWidthRPX = system.screenWidth * pixelRatio
// 屏幕高度
system.screenHeightRPX = system.screenHeight * pixelRatio
// 状态栏高度
system.statusBarHeightRPX = system.statusBarHeight * pixelRatio
// 导航栏高度(不包括状态栏，单纯的导航栏高度)
// system.navigationBarHeight = 44
// 导航栏高度(包括状态栏，整个导航栏高度)
// 底部 TabBar 菜单栏高度

// =================== 针对公共系统属性处理（APP）

// =================== 针对公共系统属性处理（小程序）

// #ifdef MP

// 设备像素比
system.pixelRatioPro = 750 / system.screenWidth
// 胶囊按钮位置
system.mbRect = uni.getMenuButtonBoundingClientRect()
// 导航栏高度
const menuBarHeight = (system.mbRect.top - system.statusBarHeight) * 2 + system.mbRect.height
system.navigationBarHeight = Math.max(menuBarHeight, system.navigationBarHeight)
// 导航栏高度 - 如果为奇数则转成偶数
if (system.navigationBarHeight % 2) { system.navigationBarHeight += 1 }
// 导航栏高度 - RPX
system.navigationBarHeightRPX = system.navigationBarHeight * pixelRatio
// 导航栏高度
system.navigationHeight = (system.statusBarHeight + system.navigationBarHeight)
// 导航栏高度 - RPX
system.navigationHeightRPX = system.navigationHeight * pixelRatio
// 底部TabBar菜单栏高度
system.tabBarHeight = Math.max(system.screenHeight - system.navigationHeight - system.screenHeight, system.tabBarHeight)
// 底部TabBar菜单栏高度 - 如果为奇数则转成偶数
if (system.tabBarHeight % 2) { system.tabBarHeight += 1 }
// 底部TabBar菜单栏高度 - RPX
system.tabBarHeightRPX = system.tabBarHeight * system.pixelRatio

// #endif

// 导出
export default system