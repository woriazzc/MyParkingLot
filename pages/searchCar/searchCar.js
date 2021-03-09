// pages/getCar/getCar.js
var app = getApp();
Page({
  data: {
    plateAreaCharset: ['京', '津', '沪', '渝', '冀', '豫', '云', '辽', '黑', '湘', '皖', '鲁', '新', '苏', '浙', '赣', '鄂', '桂', '甘', '晋', '蒙', '陕', '吉', '闽', '贵', '粤', '青', '藏', '川', '宁', '琼'],
    plateDigitCharset: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    inputBoxData: [{ char: '', hover: '' }, { char: '', hover: '' }, { char: '', hover: '' }, { char: '', hover: '' }, { char: '', hover: '' }, { char: '', hover: '' }, { char: '', hover: '' }],
    currentPos: null,
    showAreaKeyBoard: false,
    showKeyBoard: false,
    hasUnpaidOrders: false,
    orders: [
      {
        PlateNumber: "沪A·TP296",
        ParkingPosition: "2057 B2层",
        GenerateDate: "19:21",
        Total: "5.00"
      }
    ],
    animationData: {},
    showLoading: false
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      hasUnpaidOrders: false,
    })
    wx.setNavigationBarTitle({
      title: '我的车'
    })


  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    this.setData({
      plateAreaCharset: ['京', '津', '沪', '渝', '冀', '豫', '云', '辽', '黑', '湘', '皖', '鲁', '新', '苏', '浙', '赣', '鄂', '桂', '甘', '晋', '蒙', '陕', '吉', '闽', '贵', '粤', '青', '藏', '川', '宁', '琼'],
      plateDigitCharset: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'],
      inputBoxData: [{ char: '', hover: '' }, { char: '', hover: '' }, { char: '', hover: '' }, { char: '', hover: '' }, { char: '', hover: '' }, { char: '', hover: '' }, { char: '', hover: '' }],
      currentPos: null,
      showAreaKeyBoard: false,
      showKeyBoard: false,
      hasUnpaidOrders: false,
      orders: [
        {
          PlateNumber: "沪A·TP296",
          ParkingPosition: "2057 B2层",
          GenerateDate: "19:21",
          Total: "5.00"
        }
      ],
      animationData: {},
      showLoading: false
    })
    // 页面显示
    var that = this;
    this.setData({
      hasUnpaidOrders: false
    })
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    animation.top('20rpx').step()
    this.setData({
      animationData: animation.export()
    })
    this.putPlateInputBox()
    //this.query()
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onPullDownRefresh: function () {
    this.query()
    
  },
  //处理按键按下事件
  bindDigitTap: function (res) {
    let inputBoxData = this.data.inputBoxData
    let id = res.currentTarget.id
    let currentPos = id
    console.log('res', res)
    if (id > 6) {
      id = 6
      currentPos = null;
    } else {
      inputBoxData[id].hover = 'plate-input-digit-hover'
    }
    if (this.data.currentPos != null) inputBoxData[this.data.currentPos].hover = ''

    this.setData({
      inputBoxData: inputBoxData,
      currentPos: currentPos
    })

  },
  bindKeyTap: function (res) {
    console.log(res)
    let char = res.currentTarget.dataset.char
    let inputBoxData = this.data.inputBoxData
    inputBoxData[this.data.currentPos].char = char
    let passOnData = {
      currentTarget: {
        id: parseInt(this.data.currentPos) + 1
      }
    }
    this.bindDigitTap(passOnData)
  },
  //处理查询
  query: function () {
    let that = this;
    let plateNumber = this.getPlateNumberString();
    let carList = app.globalData.carList;
    this.setData({
      showLoading:true
    })
    var ok = false;
    for(var element of carList) {
      if (element.PlateNumber === plateNumber) {
        console.log('ok');
        that.setData({
          orders: [element],
          hasUnpaidOrders: true
        })
        ok = true;
        break;
      }
    }
    if (!ok) {
      wx.showModal({
        title: '提示',
        content: '未找到车牌为 '+plateNumber+' 的车辆数据，请重试。',
      })
    }
    that.setData({
      showLoading: false
    })
    wx.stopPullDownRefresh()
    wx.navigateTo({
      url: "/pages/parkNav/parkNav"
    })
  },
  getPlateNumberString: function () {
    return this.data.inputBoxData[0].char
      + this.data.inputBoxData[1].char
      + this.data.inputBoxData[2].char
      + this.data.inputBoxData[3].char
      + this.data.inputBoxData[4].char
      + this.data.inputBoxData[5].char
      + this.data.inputBoxData[6].char
  },
  putPlateInputBox: function () {
    var plateNumber = wx.getStorageSync('plateNumber')
    if (plateNumber != []) {
      this.setData({
        inputBoxData: plateNumber
    })
    }else{
      let passOnData = {
        currentTarget: {
          id: 0
        }
      }
      this.bindDigitTap(passOnData)
    }
  },
  queryOtherPlate:function(){
    this.setData({
      hasUnpaidOrders:false
    })
  }
})