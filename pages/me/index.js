// pages/me/index.js
const app = new getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    isShow:false,
    canIUse: wx.canIUse("button.open-type.getUserInfo")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        // userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        isShow:true
      });
      this.setUserInfo();
    } else if (this.data.canIUse) {
      /** 
       * 由于getUserInfo是网络请求，可能会在Page.onLoad之后才返回
       * 为了防止这种事情发生加一个回调函数
       */
      app.userInfoReadyCallback = res => {
        // console.log(res);
        this.setData({
          // userInfo: res.userInfo,
          hasUserInfo: true,
          isShow: true
        });
        this.setUserInfo();
      }
    }
  },

  // 获取用户信息
  getUserInfo: function (e) {
    // console.log(e);
    if (e.detail.userInfo){
      var that = this;
      // var user_info = e.detail.userInfo;
      // 用户注册
      wx.request({
        url: app.globalData.serverUrl +'register',
        method: 'GET',
        data: {
          openid: app.globalData.openid,
          wx_headimg: e.detail.userInfo.avatarUrl,
          wx_nickname: e.detail.userInfo.nickName
        },
        success: function (res) {
          // console.log(res);
          if (res.data.status == 1){
            that.setUserInfo();
          }else{
            wx.showModal({
              title: '提示',
              showCancel: false,
              content: '登录失败'
            })
          }
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        showCancel:false,
        content: '需要授权登录'
      })
    }
    
  },
  // 设置用户信息
  setUserInfo:function(){
    // console.log(info);
    var that = this;
    wx.request({
      url: app.globalData.serverUrl + 'getuserinfo',
      method:'GET',
      data:{
        openid: app.globalData.openid
      },
      success:function(e){
        console.log(e);
        if(e.data){
          that.setData({
            userInfo: e.data,
            hasUserInfo: true,
            isShow: true
          })
        }
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

  },
  // 好友福利
  friendWelfare:function(){
    wx.showModal({
      title: '提示',
      content: '该活动暂未开放'
    })
  },
  // 打卡福利
  dakaWelfare: function () {
    wx.showModal({
      title: '提示',
      content: '该活动暂未开放'
    })
  },
  // 永久订单
  foreverorder:function(){
    wx.navigateTo({
      url: '/pages/me/foreverorder',
    })
  },
  // 物流信息
  logisticsInformation:function(){
    wx.navigateTo({
      url: '/pages/me/logisticsInformation',
    })
  },
  // 经期设置
  periodSetting:function(){
    wx.navigateTo({
      url: '/pages/me/periodsetting',
    })
  },
  // 经期记录
  periodrecord: function () {
    wx.navigateTo({
      url: '/pages/me/periodrecord',
    })
  },
  // 收货地址
  receivingAddress:function(){
    wx.navigateTo({
      url: '/pages/me/receivingAddress',
    })
  },
  // 客服
  customerService: function () {
    wx.showModal({
      title: '提示',
      content: '该功能暂未开放'
    })
  },
  // 绑定电话号码
  bindphone:function(){
    wx.navigateTo({
      url: '/pages/me/bindphone'
    })
  }
})