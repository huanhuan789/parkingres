// pages/navigation/navigation.js
const app = getApp()
var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];  //定位成功回调对象  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ak: "4x37vpF6lo9oRiae2LBM34IiU7tRRHEx", //填写申请到的ak  
    markers: [],
    longitude: '',   //经度  
    latitude: '',    //纬度  
    address: '',     //地址  
    cityInfo: {}     //城市信息  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // /* 获取定位地理位置 */
    // // 新建bmap对象   
    // var BMap = new bmap.BMapWX({
    //   ak: that.data.ak
    // });
    // var fail = function (data) {
    //   console.log(data);
    // };
    // var success = function (data) {
    //   //返回数据内，已经包含经纬度  
    //   console.log(data);
    //   //使用wxMarkerData获取数据  
    //   wxMarkerData = data.wxMarkerData;
    //   //把所有数据放在初始化data内  
    //   that.setData({
    //     markers: wxMarkerData,
    //     latitude: wxMarkerData[0].latitude,
    //     longitude: wxMarkerData[0].longitude,
    //     address: wxMarkerData[0].address,
    //     cityInfo: data.originalData.result.addressComponent
    //   });
    // }
    // // 发起regeocoding检索请求   
    // BMap.regeocoding({
    //   fail: fail,
    //   success: success
    // });
    // 获取位置信息
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(latitude,longitude)
        wx.openLocation({//使用微信内置地图查看位置
          latitude: 43.89616,
          longitude: 125.3268,
          name:"停车场",
          address:'停车场'
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