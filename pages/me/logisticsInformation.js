// pages/me/logisticsInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTab:0,
    information: [
      {
        order_id: 1,
        order_num: 2018121201,
        order_name: '土豪卫生巾盒子',
        order_price: 89,
        box_num: 6,
        box_url: '/image/sf.jpg',
        sum_price: 534,
        isWho: '本人',
        remain: 5,
        status:'已发货'
      },
      {
        order_id: 2,
        order_num: 2018121202,
        order_name: '聚划算生巾盒子',
        order_price: 56,
        box_num: 6,
        box_url: '/image/sf.jpg',
        sum_price: 336,
        isWho: '妹妹',
        remain: 4,
        status: '已发货'
      },
      {
        order_id: 3,
        order_num: 2018121203,
        order_name: '聚便宜生巾盒子',
        order_price: 33,
        box_num: 6,
        box_url: '/image/sf.jpg',
        sum_price: 198,
        isWho: '姐姐',
        remain: 3,
        status: '待评价'
      }
    ],
    d_sh:[
      {
        order_id: 1,
        order_num: 2018121201,
        order_name: '土豪卫生巾盒子',
        order_price: 89,
        box_num: 6,
        box_url: '/image/sf.jpg',
        sum_price: 534,
        isWho: '本人',
        remain: 5,
        status: '已发货'
      },
      {
        order_id: 2,
        order_num: 2018121202,
        order_name: '聚划算生巾盒子',
        order_price: 56,
        box_num: 6,
        box_url: '/image/sf.jpg',
        sum_price: 336,
        isWho: '妹妹',
        remain: 4,
        status: '已发货'
      }
    ],
    d_comment:[
      {
        order_id: 3,
        order_num: 2018121203,
        order_name: '聚便宜生巾盒子',
        order_price: 33,
        box_num: 6,
        box_url: '/image/sf.jpg',
        sum_price: 198,
        isWho: '姐姐',
        remain: 3,
        status: '待评价'
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
  changeTab:function(e){
    // console.log(e);
    if (this.data.topTab === e.currentTarget.dataset.val){
      return;
    }else{
      this.setData({
        topTab: e.currentTarget.dataset.val
      });
    }
  },
  // 确认收货
  confirmReceipt:function(e){
    wx.showModal({
      title: '提示',
      content: '确认收货',
    })
  },
  // 立即评价
  immediateEvaluation: function (e) {
    wx.showModal({
      title: '提示',
      content: '评价成功',
    })
  },
  // 查看物流信息
  viewLogistics:function(e){
    wx.showModal({
      title: '提示',
      content: '查看物流信息',
    })
  }
})