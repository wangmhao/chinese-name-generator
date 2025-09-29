const app = getApp()

Page({
  data: {
    selectedPlan: 'monthly',
    selectedPayment: 'wechat',
    paying: false,
    showTermsModal: false,
    prices: {
      monthly: 9.9,
      yearly: 68
    }
  },

  onLoad(options) {
    // 检查是否已经付费
    if (app.checkPaid()) {
      wx.showModal({
        title: '您已是付费用户',
        content: '您已经购买过会员，可以无限制使用所有功能',
        showCancel: false,
        confirmText: '知道了',
        success: () => {
          wx.navigateBack()
        }
      })
    }
  },

  // 选择套餐
  selectPlan(e) {
    const plan = e.currentTarget.dataset.plan
    this.setData({
      selectedPlan: plan
    })
  },

  // 选择支付方式
  selectPayment(e) {
    const payment = e.currentTarget.dataset.payment
    this.setData({
      selectedPayment: payment
    })
  },

  // 处理支付
  handlePay() {
    if (this.data.paying) {
      return
    }

    this.setData({ paying: true })

    const price = this.data.prices[this.data.selectedPlan]
    const planName = this.data.selectedPlan === 'monthly' ? '月度会员' : '年度会员'

    // 这里需要接入真实的支付接口
    // 目前使用模拟支付流程
    this.simulatePayment(price, planName)
  },

  // 模拟支付流程
  simulatePayment(price, planName) {
    wx.showLoading({
      title: '正在处理支付...'
    })

    // 模拟网络请求
    setTimeout(() => {
      wx.hideLoading()

      // 模拟支付成功
      this.processPaymentSuccess({
        orderId: 'ORDER_' + Date.now(),
        price: price,
        planName: planName,
        payTime: new Date().toISOString()
      })
    }, 2000)
  },

  // 处理支付成功
  processPaymentSuccess(paymentInfo) {
    // 设置付费状态
    app.setPaid()

    // 保存支付记录
    const paymentHistory = wx.getStorageSync('paymentHistory') || []
    paymentHistory.unshift({
      ...paymentInfo,
      createTime: new Date().toISOString()
    })
    wx.setStorageSync('paymentHistory', paymentHistory)

    // 显示成功提示
    wx.showModal({
      title: '支付成功',
      content: `您已成功购买${paymentInfo.planName}，现在可以无限制使用了！`,
      showCancel: false,
      confirmText: '开始使用',
      success: () => {
        // 返回首页
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    })

    this.setData({ paying: false })
  },

  // 显示用户协议
  showTerms() {
    this.setData({
      showTermsModal: true
    })
  },

  // 隐藏用户协议
  hideTerms() {
    this.setData({
      showTermsModal: false
    })
  },

  // 分享功能
  onShareAppMessage() {
    return {
      title: '🎯 专业宝宝起名神器 - 解锁无限使用',
      path: '/pages/pay/pay',
      imageUrl: '/images/share.png'
    }
  }
})