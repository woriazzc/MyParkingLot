// pages/advertising/advertising.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    miao: 16,
    time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.time = setInterval(function () {
      that.setData({
        miao: that.data.miao-1
      })
      if (that.data.miao == 0){
        clearInterval(that.time);
        wx.switchTab({
          url: "/pages/empLot/empLot"
        })
      }

    }, 1000)
  },

  cliadv: function(){
        clearInterval(this.time)
        wx.switchTab({
          url: "/pages/empLot/empLot"
        })
  }
})
