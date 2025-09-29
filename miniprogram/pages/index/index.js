const app = getApp()

Page({
  data: {
    usageCount: 0,
    freeCount: 3,
    progress: 0,
    canUse: false
  },

  onLoad() {
    this.updateUsageStatus()
  },

  onShow() {
    this.updateUsageStatus()
  },

  // 更新使用状态
  updateUsageStatus() {
    const usageCount = wx.getStorageSync('usageCount') || 0
    const freeCount = app.globalData.freeCount
    const isPaid = app.checkPaid()

    const canUse = isPaid || usageCount < freeCount
    const progress = isPaid ? 100 : Math.min((usageCount / freeCount) * 100, 100)

    this.setData({
      usageCount,
      freeCount,
      progress,
      canUse
    })
  },

  // 开始起名
  startNaming() {
    const isPaid = app.checkPaid()
    const usageCount = wx.getStorageSync('usageCount') || 0

    if (!isPaid && usageCount >= app.globalData.freeCount) {
      wx.showModal({
        title: '使用次数已用完',
        content: '您已使用完免费次数，请付费解锁无限使用',
        confirmText: '去付费',
        cancelText: '分享获取',
        success: (res) => {
          if (res.confirm) {
            this.goToPay()
          } else {
            this.shareApp()
          }
        }
      })
      return
    }

    // 跳转到WebView页面
    wx.navigateTo({
      url: '/pages/webview/webview'
    })
  },

  // 跳转到付费页面
  goToPay() {
    wx.navigateTo({
      url: '/pages/pay/pay'
    })
  },

  // 分享小程序
  shareApp() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  // 分享给好友
  onShareAppMessage() {
    return {
      title: '🎯 专业宝宝起名神器 - 八字五行分析',
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

  // 联系客服
  contactService() {
    wx.showModal({
      title: '联系客服',
      content: '微信号：wechat_naming\n客服时间：9:00-21:00',
      showCancel: false,
      confirmText: '知道了'
    })
  }
})