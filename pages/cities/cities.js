// pages/cities/cities.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://apis.juhe.cn/simpleWeather/cityList?key=0d653315a1d5056cd2a861028c6204ec',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        var cityList = res.data.result;
        that.setData({
          cityList:cityList
        })
      }
    })
  },
  goCity:function(event){
    var id = event.currentTarget.id;
    wx.navigateTo({
      url:"/pages/city/city?id="+id
    });
  }
})