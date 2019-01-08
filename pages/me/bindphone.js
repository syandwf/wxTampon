// pages/me/bindphone.js
const app = new getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true
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
  // 表单提交事件
  subphone: function (e){
    // console.log(e);
    wx.request({
      url: app.globalData.serverUrl + 'bindphone',
      method:'GET',
      data:{
        openid:app.globalData.openid,
        phone: e.detail.value.phone
      },
      success:function(e){
        console.log(e);
        if(e.data){
          // wx.showModal({
          //   title: '提示',
          //   content: '绑定成功',
          //   showCancel:false,
          //   success(res) {
          //     if (res.confirm) {
          //       // console.log('用户点击确定');
          //       wx.switchTab({
          //         url: '/pages/me/index',
          //         success: function (e) {
          //           // console.log(e);
          //           var page = getCurrentPages().pop();
          //           if (page == undefined || page == null) return;
          //           page.onLoad();
          //         } 
          //       })
          //     } 
          //   }
          // })
          wx.showToast({
            title: '绑定成功',
            icon: 'success',
            duration: 2000,
            success:function(res) {
              // console.log(res);
              setTimeout(function () {
                wx.switchTab({
                  url: '/pages/me/index',
                  success: function (e) {
                    // console.log(e);
                    var page = getCurrentPages().pop();
                    if (page == undefined || page == null) return;
                    page.onLoad();
                  }
                })
              }, 2000);
            }
          })
        }else{
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: '绑定失败'
          })
        }
      }
    })
  },
  // 输入框改变事件
  inputphone:function(e){
    // console.log(e);
    if (e.detail.cursor == 11){
      this.setData({
        disabled:false
      })
    }else{
      this.setData({
        disabled: true
      })
    }
  }
})