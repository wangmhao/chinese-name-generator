App({
  globalData: {
    userInfo: null,
    webUrl: 'https://wangmhao.github.io/chinese-name-generator/chinese-name-generator.html',
    price: 9.9,
    freeCount: 3
  },

  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },

  // 检查使用次数
  checkUsage() {
    const usageCount = wx.getStorageSync('usageCount') || 0
    return usageCount < this.globalData.freeCount
  },

  // 增加使用次数
  incrementUsage() {
    const usageCount = wx.getStorageSync('usageCount') || 0
    wx.setStorageSync('usageCount', usageCount + 1)
  },

  // 检查是否已付费
  checkPaid() {
    const isPaid = wx.getStorageSync('isPaid') || false
    return isPaid
  },

  // 设置付费状态
  setPaid() {
    wx.setStorageSync('isPaid', true)
  }
})