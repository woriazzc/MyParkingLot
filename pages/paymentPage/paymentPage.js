// pages/paymentPage/paymentPage.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carCode: "",
    carPos: "",
    startTime: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      carCode: app.globalData.carCode,
      carPos: app.globalData.carPos,
      startTime: app.globalData.startTime
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },
  paySuccess: function () {
    setTimeout(function () {
      wx.showToast({
        title: '支付成功',
        icon: 'success',
        duration: 700, 
        success:function(){ 
            setTimeout(function () { 
                wx.switchTab({ 
                    url: '/pages/user/user'
                 }) 
             }, 800) 
         } 
     })
    }, 500)
    
  }
})