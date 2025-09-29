const app = getApp()

Page({
  data: {
    webUrl: '',
    loading: true,
    error: false,
    errorMessage: ''
  },

  onLoad(options) {
    // 检查使用权限
    if (!this.checkPermission()) {
      return
    }

    // 设置WebView URL
    const baseUrl = app.globalData.webUrl
    // 添加时间戳防止缓存
    const timestamp = Date.now()
    const webUrl = `${baseUrl}?t=${timestamp}&source=miniprogram`

    this.setData({
      webUrl,
      loading: true,
      error: false
    })

    // 记录使用次数
    this.recordUsage()

    // 设置分享信息
    this.setupShare()
  },

  // 检查使用权限
  checkPermission() {
    const isPaid = app.checkPaid()
    const usageCount = wx.getStorageSync('usageCount') || 0

    if (!isPaid && usageCount >= app.globalData.freeCount) {
      wx.showModal({
        title: '使用次数已用完',
        content: '您已使用完免费次数，请付费解锁无限使用',
        confirmText: '去付费',
        cancelText: '返回',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/pay/pay'
            })
          } else {
            wx.navigateBack()
          }
        }
      })
      return false
    }

    return true
  },

  // 记录使用次数
  recordUsage() {
    const isPaid = app.checkPaid()
    if (!isPaid) {
      app.incrementUsage()
    }
  },

  // WebView加载完成
  webviewLoad(e) {
    console.log('WebView加载成功:', e)
    this.setData({
      loading: false,
      error: false
    })
  },

  // WebView加载错误
  webviewError(e) {
    console.error('WebView加载失败:', e)
    this.setData({
      loading: false,
      error: true,
      errorMessage: '网络连接失败，请检查网络设置'
    })
  },

  // 重试加载
  retry() {
    this.setData({
      loading: true,
      error: false
    })

    // 重新加载
    const timestamp = Date.now()
    const webUrl = `${app.globalData.webUrl}?t=${timestamp}&source=miniprogram`

    this.setData({ webUrl })
  },

  // 返回首页
  goBack() {
    wx.navigateBack()
  },

  // 设置分享
  setupShare() {
    // 页面分享配置
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  // 分享给好友
  onShareAppMessage() {
    return {
      title: '🎯 专业宝宝起名神器 - 我正在为宝宝起名，快来试试！',
      path: '/pages/index/index',
      imageUrl: '/images/share.png'
    }
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: '🎯 专业宝宝起名神器 - 八字五行分析，为宝宝取个好名字',
      imageUrl: '/images/share.png'
    }
  },

  // 监听页面返回
  onUnload() {
    // 可以在这里添加一些清理工作
  },

  // 监听页面显示
  onShow() {
    // 可以在这里更新页面状态
  }
})