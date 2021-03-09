// pages/advPage/advPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tickets: [
      {
        id: 0,
        status: 0,
        isHidden: 0
      },
      {
        id: 0,
        status: 0,
        isHidden: 0
      },
      {
        id: 0,
        status: 0,
        isHidden: 0
      },
      {
        id: 0,
        status: 0,
        isHidden: 0
      }
    ],
    type: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  ontapuse: function (e) {
    console.log(e);
    let ticks = this.data.tickets;
    ticks[e.currentTarget.id].status = 1;
    this.setData({
      tickets: ticks
    })
  },
  onclick_menu: function (e) {
    console.log(e);
    let tp = e.currentTarget.dataset.type;
    let ticks = this.data.tickets;
    if (tp == 0) {
      for (var i = 0; i < ticks.length; i++){
        ticks[i].isHidden = 0;
      }
    }
    else if (tp == 1) {
      for (var i = 0; i < ticks.length; i++){
        if (ticks[i].status == 1) ticks[i].isHidden = 1;
        else ticks[i].isHidden = 0;
      }
    }
    else if (tp == 2) {
      for (i = 0; i < ticks.length; i++){
        if (ticks[i].status == 0) ticks[i].isHidden = 1;
        else ticks[i].isHidden = 0;
      }
    }
    
    this.setData({
      type: tp,
      tickets: ticks
    })
  },
  tapbisiniss: function (e) {
    wx.navigateTo({
      url: "/pages/aliAdv/aliAdv"
    });
      
    
  }
})