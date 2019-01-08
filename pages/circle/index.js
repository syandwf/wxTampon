// pages/circle/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:'display',
    navData: [
      {
        text: '首页'
      },
      {
        text: '健康'
      },
      {
        text: '情感'
      },
      {
        text: '职场'
      },
      {
        text: '育儿'
      },
      {
        text: '纠纷'
      },
      {
        text: '青葱'
      },
      {
        text: '上课'
      },
      {
        text: '下课'
      }
    ],
    currentTab: 0,
    navScrollLeft: 0,
    pixelRatio:0,
    circle_list: [
      {
        id:1,
        name: '北京小疯子',
        heart_num: '326',
        title: '新加坡|“会飞的面”网红餐厅太好吃了！刚刚会飞的面浏览浏览',
        url: '/image/circle1.jpg',
        avatar: '/image/circle_head1.jpg'
      },
      {
        id: 2,
        name: 'chinchin',
        heart_num: '2',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '/image/circle2.jpg',
        avatar: '/image/circle_head2.jpg'
      },
      {
        id: 3,
        name: '美美de兔兔',
        heart_num: '3',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '/image/circle3.jpg',
        avatar: '/image/circle_head3.jpg'
      }, 
      {
        id: 4,
        name: '徐西瓜',
        heart_num: '4',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '/image/circle4.jpg',
        avatar: '/image/circle_head4.jpg'
      },
      {
        id: 5,
        name: '小yuan仔',
        heart_num: '32',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '/image/circle5.jpg',
        avatar: '/image/circle_head4.jpg'
      },
      {
        id: 6,
        name: '踩萌主',
        heart_num: '906',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '/image/circle6.jpg',
        avatar: '/image/circle_head3.jpg'
      },
      {
        id: 7,
        name: 'Tweety',
        heart_num: '256',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '/image/circle7.jpg',
        avatar: '/image/circle_head2.jpg'
      },
      {
        id: 8,
        name: '陈茜茜本兮',
        heart_num: '458',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '/image/circle1.jpg',
        avatar: '/image/circle_head1.jpg'
      },
      {
        id: 9,
        name: '白石爱吃肉',
        heart_num: '633',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '/image/circle2.jpg',
        avatar: '/image/circle_head4.jpg'
      },
      {
        id: 10,
        name: '陈小希',
        heart_num: '268',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '/image/circle3.jpg',
        avatar: '/image/circle_head3.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
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
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    // 模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
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

  // 导航条
  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  // 切换内容
  switchTab(event) {
    // console.log(event);
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    console.log(cur);
    if(cur === 0){
      console.log(cur);
      this.setData({

      });
    }
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  },

  // 获取焦点
  searchfocus:function(e){
    console.log(e);
  },
  // 失去焦点
  searchblur: function (e) {
    console.log(e);
  },
  // 搜索框输入
  serchinput:function(e){
    console.log(e); 
    if(e.detail.value){
      this.setData({
        isShow:'none'
      });
    }else{
      this.setData({
        isShow:'display'
      });
    }
  },
  // 搜索
  search:function(e){
    console.log(e);
  },
  // 跳转
  onTapdetail:function(e){
    console.log(e);
    var postId = e.currentTarget.dataset.postid;
    wx.navigateTo({
      // 跳转传参算数
      url:'/pages/circle/details?id='+postId 
    });
  }
})