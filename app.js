//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    try {
      var res = wx.getSystemInfoSync()
      console.log(res.model)
      console.log(res.pixelRatio)
      console.log(res.windowWidth)
      console.log(res.windowHeight)
      console.log(res.language)
      console.log(res.version)
      console.log(res.platform)
      this.globalData.windowWidth=res.windowWidth;
      this.globalData.windowHeight=res.windowHeight;
    } catch (e) {
      // Do something when catch error
    }

    
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    windowWidth:0,
    windowHeight:50,
    carCode: "沪A·TP296",
    carPos: "2057 B2层",
    startTime: "19:21",
    userPhoneNumber: "17321274215",
    carList: [
      {
        PlateNumber: "沪ATP296",
        ParkingPosition: "2057 B2层",
        GenerateDate: "19:21",
        Total: "5.00"
      },
      {
        PlateNumber: "沪B897H3",
        ParkingPosition: "2057 B2层",
        GenerateDate: "19:21",
        Total: "5.00"
      },
      {
        PlateNumber: "沪C897H3",
        ParkingPosition: "2057 B2层",
        GenerateDate: "19:21",
        Total: "5.00"
      },
      {
        PlateNumber: "沪D897H3",
        ParkingPosition: "2057 B2层",
        GenerateDate: "19:21",
        Total: "5.00"
      },
      {
        PlateNumber: "京E897H3",
        ParkingPosition: "2057 B2层",
        GenerateDate: "19:21",
        Total: "5.00"
      },
      {
        PlateNumber: "京QA8993",
        ParkingPosition: "2057 B2层",
        GenerateDate: "19:21",
        Total: "5.00"
      }
    ]
  }
})