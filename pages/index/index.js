// index.js
// 获取应用实例
const app = getApp()

Page({
  data:{
    indicatorDots:true,//true显示小圆点/flase不显示小圆点
    autoplay:true,//ture自动播放/false不自动播放
    interval:3000,//自动播放时间
    duration:2000,//切换间隔时间
    bannerArray:[
      {imgPath:"/images/banner1.jpg"},
      {imgPath:"/images/banner2.jpg"},
      {imgPath:"/images/banner3.jpg"}
    ],
    cityName:"",
    weather:{}
  },
  search:function(){
    var cn = this.data.cityName;
    var that = this;
    wx.request({
      url: 'http://apis.juhe.cn/simpleWeather/query?key=83d8ded0769cf36f6b0ae7f6d2cd7d99&city='+cn,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        var wea = res.data.result.realtime;
        that.setData({
          weather:wea
        })
      }
    })
  }
})