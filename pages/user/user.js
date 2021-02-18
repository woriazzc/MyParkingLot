// pages/user/user.js
var app = getApp();
Page({
  data:{
    userInfo:{},
    avatarUrl: "",
    carCode: "",
    userPhoneNumber: ""
  },
  onLoad:function(options){
    var that=this;
    app.getUserInfo(function (info) {
      console.log(info);
      that.setData({
        userInfo: info,
        avatarUrl: info.avatarUrl
      })
    });
    that.setData({
      carCode: app.globalData.carCode,
      userPhoneNumber: app.globalData.userPhoneNumber
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  toPay: function (e) {
    wx.navigateTo({
      url: '../paymentPage/paymentPage'
    });
  },
  toList: function (e) {
    wx.navigateTo({
      url: '../payList/payList'
    });
  }
})