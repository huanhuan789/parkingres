// pages/parkingres/parkingres.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 总车位
    cars:[
      {name:'car1',value:'车位1'},
      {name:'car2',value:'车位2'},
      {name:'car3',value:'车位3'},
      {name:'car4',value:'车位4'},
      {name:'car5',value:'车位5'},
      {name:'car6',value:'车位6'},
      {name:'car7',value:'车位7'},
      {name:'car8',value:'车位8'},
      {name:'car9',value:'车位9'},
      {name:'car10',value:'车位10'},
      {name:'car11',value:'车位11'},
      {name:'car12',value:'车位12'},
  ],
  // 剩余车位
  restcar:12,
times:[{name:'ten',value:'10分钟/支付2元'},
 {name:'twenty',value:'20分钟/支付4元'}
]
  },
  // 预约车位
 radioChangecar(e){
console.log(e)
var item = this.data.cars;
// 记录剩余车位的数组
var arr=[]
for(var i = 0; i < item.length; i++){
  item[i].checked = item[i].value==e.detail.value;
  // 未被选择为false加入到剩余车位数组中
  if(item[i].checked==false){
    arr.push(item[i])
    
  }
}
console.log(arr)
console.log(item)
// 将checked更改为true的值 重新赋值给cars
this.setData({
  cars: item,
  restcar:arr.length
})


},
// 预约时间
radioChangetime(e){
  console.log(e)
},
// 
  prakingsum(){
   
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success (res) {
        console.log(res)
        wx.navigateTo({
          url: '../hourlypay/hourlypay',
        })
       },
      fail (res) { }
    })
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