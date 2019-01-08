// pages/me/periodsetting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day:[],
    cycle:[],
    law:['早来','正常','晚来'],
    index:3,
    index2:13,
    index3:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arrDay = [];
    var arrCycle = [];
    for (let i = 2; i <= 14; i++){
      arrDay.push(i);
    }
    for(let j = 15; j<=40; j++){
      arrCycle.push(j);
    }
    this.setData({
      day:arrDay,
      cycle:arrCycle
    });
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
  bindDayChange:function(e){
    // console.log(e);
    this.setData({
      index: e.detail.value
    });
  },
  bindCycleChange: function (e) {
    // console.log(e);
    this.setData({
      index2: e.detail.value
    });
  },
  bindLawChange: function (e) {
    // console.log(e);
    this.setData({
      index3: e.detail.value
    });
  }
})