import Vue from 'vue'

// 初始化配置文件
import system from '@/common/system.js'

// 引入公共 css
import '@/common/common.scss'

// uView
import uView from 'uview-ui'

// 配置与使用
// 使用 uView
Vue.use(uView)
// Easycom 配置（参考：https://www.uviewui.com/components/npmSetting.html）
// 配置 uView 尺寸单位（默认：px，参考：https://www.uviewui.com/components/setting.html）
uni.$u.config.unit = 'rpx'
Vue.prototype.$system = system

