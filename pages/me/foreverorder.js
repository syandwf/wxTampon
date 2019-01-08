// pages/me/foreverorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foreverorder:[
      {
        order_id:1,
        order_num:2018121201,
        order_name:'土豪卫生巾盒子',
        order_price:89,
        box_num:6,
        box_url:'/image/sf.jpg',
        sum_price:534,
        isWho:'本人',
        remain:5
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
        remain: 4
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
        remain: 3
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
  // 立即续费
  ljXufei:function(){
    wx.showModal({
      title: '提示',
      content: '续费成功！',
    })

    // 获取时间戳
    // var timestamp = Date.parse(new Date());
    // timestamp = timestamp / 1000;
    // console.log("当前时间戳为：" + timestamp);

    // 查询快递信息 
    // wx.request({
    //   url: 'https://kop.kuaidihelp.com/api', // 仅为示例，并非真实的接口地址
    //   method:'POST',
    //   data: {
    //     app_id: '101734',
    //     method: 'express.info.get',
    //     sign:'72c8ba3f824357799dbc24ce39bdfd1e',
    //     ts: timestamp,
    //     data:{
    //       waybill_no:'3834541968706',
    //       exp_company_code:'yd',
    //       result_sort:'0'
    //     }
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded' // 默认值
    //   },
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
  }
})

