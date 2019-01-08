// pages/me/receivingAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address_list:[
      {
        id:1,
        name: '王文峰',
        tel:'18906050278',
        province:'福建省',
        city:'厦门市',
        area:'海沧区',
        address:'许厝村',
        isDefault:true
      },
      {
        id: 2,
        name: '王文峰',
        tel: '18906050278',
        province: '福建省',
        city: '厦门市',
        area: '海沧区',
        address: '许厝村',
        isDefault: false
      }
    ]
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

  },
  addAddress:function(){
    wx.navigateTo({
      url: '/pages/me/addAddress',
    })
  }
})