// pages/city/city.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather:{},
    future:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var that = this;
    wx.request({
      url: 'http://apis.juhe.cn/simpleWeather/query?key=0d653315a1d5056cd2a861028c6204ec&city='+id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        var wea = res.data.result.realtime;
        var fut = res.data.result.future;
        that.setData({
          weather:wea,
          future:fut
        })
      }
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})