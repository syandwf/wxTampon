// pages/circle/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId:0,
    circle_detail:{},
    iszk:false,
    comment_list:[],
    comment_num:0,
    img_height:'930rpx',
    item_height: '998rpx'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // var postId = options.id;
    this.setData({
      postId:options.id,
      circle_detail: {
        id: options.id,
        user_img:'/image/circle_head2.jpg',
        user_name:'chinchin',
        content_img:[
          '/image/circle1.jpg',
          '/image/circle2.jpg',
          '/image/circle3.jpg',
          '/image/circle4.jpg',
          '/image/circle5.jpg'
        ],
        isGz:false,
        time:'12-6',
        comment_num:88,
        zan_num:998,
        content: "人不能总是怀旧，沉迷于往事中，过去的一些事情该放下的放下，不能总是念念不忘，这对自己的身心不利，有害无益。功与过都是昨日的生活结果，过去的不足之处已经用行动弥补，得到应有的惩戒，并为之付出代价。今天我们不会再犯类似的错误。人生的路上，太多的为什么，没有答案 ；有时我们是在付出的路上，是能够收获的，是清楚的看到了自己想要的，或者是不想要的，这又何尝不是一种宝贵的结果。命运会厚待温柔多情的人，好过冷漠的一颗心。特别喜欢一句话：“聪明是一种天赋，善良是一种选择。” 选择善良是一件好事，有选择性地与人为善，则是一件又好又正确的事。 心存良善，更应懂得自保；择善而行，更应懂得把善良用对事给对人。我们可以轻易的躲开一头大象，却总是躲不开蚂蚁。使我们不快乐的，也往往是一些芝麻绿豆般的小事。生活中的小细节莫轻视，多用点心把幸福掌握!很多人都觉得优秀的人是因为有天赋。其实，天赋异禀的人是很少的，真正让他们出类拔萃的是全心投入和用心付出。拥有得天独厚的优势固然重要，但更多时候，优秀靠的是日复一日的持续努力。当你转过身的时候 我的心狠狠的抽动了一下。现在我知道了这个叫作心痛。"
      },
      comment_list:[
        {
          id: options.id,
          user_img: '/image/circle_head1.jpg',
          user_name: 'chinchin',
          content:'超级无敌漂亮超级无敌漂亮超级无敌漂亮超级无敌漂亮！！',
          time: '12-6',
          comment_num: 28,
          zan_num: 98,
          reply_list:[
            {
              user_name:'厦门小疯子',
              content:'真的很美美哒！'
            },
            {
              user_name: '北京小疯子',
              content: '超级美哒！'
            }
          ]
        },
        {
          id: options.id,
          user_img: '/image/circle_head3.jpg',
          user_name: '厦门厦门',
          content: '很漂亮！！！',
          time: '12-6',
          comment_num: 8,
          zan_num: 38,
          reply_list: [
            {
              user_name: 'chinchin',
              content: '真的很美美哒！'
            },
            {
              user_name: '北京小疯子',
              content: '超级美哒！'
            }
          ]
        },
        {
          id: options.id,
          user_img: '/image/circle_head4.jpg',
          user_name: '海沧',
          content: '美美哒！',
          time: '12-6',
          comment_num: 28,
          zan_num: 8,
          reply_list: [
            {
              user_name: '厦门小疯子',
              content: '真的很美美哒！'
            },
            {
              user_name: 'chinchin',
              content: '超级美哒！'
            }
          ]
        }
      ],
      comment_num: 3
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
  // 关注
  click_gz:function(e){
    console.log(e);
    var _this = this;
    if (e.currentTarget.dataset.detail.isGz){
      console.log(1);
      wx.showModal({
        // title: '提示',
        content: '确认不再关注',
        cancelColor: '#fc5871',
        confirmColor: '#fc5871',
        success: function (res) {
          console.log(res);
          if (res.confirm) {
            console.log('用户点击确定')
            _this.setData({
              circle_detail: {
                id: e.currentTarget.dataset.id,
                user_img: '/image/circle_head2.jpg',
                user_name: 'chinchin',
                content_img: [
                  '/image/circle1.jpg',
                  '/image/circle2.jpg',
                  '/image/circle3.jpg',
                  '/image/circle4.jpg',
                  '/image/circle5.jpg'
                ],
                isGz: false,
                time: '12-6',
                comment_num:88,
                zan_num: 998,
                content: "人不能总是怀旧，沉迷于往事中，过去的一些事情该放下的放下，不能总是念念不忘，这对自己的身心不利，有害无益。功与过都是昨日的生活结果，过去的不足之处已经用行动弥补，得到应有的惩戒，并为之付出代价。今天我们不会再犯类似的错误。人生的路上，太多的为什么，没有答案 ；有时我们是在付出的路上，是能够收获的，是清楚的看到了自己想要的，或者是不想要的，这又何尝不是一种宝贵的结果。命运会厚待温柔多情的人，好过冷漠的一颗心。特别喜欢一句话：“聪明是一种天赋，善良是一种选择。” 选择善良是一件好事，有选择性地与人为善，则是一件又好又正确的事。 心存良善，更应懂得自保；择善而行，更应懂得把善良用对事给对人。我们可以轻易的躲开一头大象，却总是躲不开蚂蚁。使我们不快乐的，也往往是一些芝麻绿豆般的小事。生活中的小细节莫轻视，多用点心把幸福掌握!很多人都觉得优秀的人是因为有天赋。其实，天赋异禀的人是很少的，真正让他们出类拔萃的是全心投入和用心付出。拥有得天独厚的优势固然重要，但更多时候，优秀靠的是日复一日的持续努力。当你转过身的时候 我的心狠狠的抽动了一下。现在我知道了这个叫作心痛。"
              }
            });
          } else {
            console.log('用户点击取消')
          }
        }
      });
    } else{
      this.setData({
        circle_detail: {
          id: e.currentTarget.dataset.id,
          user_img: '/image/circle_head2.jpg',
          user_name: 'chinchin',
          content_img: [
            '/image/circle1.jpg',
            '/image/circle2.jpg',
            '/image/circle3.jpg',
            '/image/circle4.jpg',
            '/image/circle5.jpg'
          ],
          isGz: true,
          time: '12-6',
          comment_num:88,
          zan_num: 998,
          content:"人不能总是怀旧，沉迷于往事中，过去的一些事情该放下的放下，不能总是念念不忘，这对自己的身心不利，有害无益。功与过都是昨日的生活结果，过去的不足之处已经用行动弥补，得到应有的惩戒，并为之付出代价。今天我们不会再犯类似的错误。人生的路上，太多的为什么，没有答案 ；有时我们是在付出的路上，是能够收获的，是清楚的看到了自己想要的，或者是不想要的，这又何尝不是一种宝贵的结果。命运会厚待温柔多情的人，好过冷漠的一颗心。特别喜欢一句话：“聪明是一种天赋，善良是一种选择。” 选择善良是一件好事，有选择性地与人为善，则是一件又好又正确的事。 心存良善，更应懂得自保；择善而行，更应懂得把善良用对事给对人。我们可以轻易的躲开一头大象，却总是躲不开蚂蚁。使我们不快乐的，也往往是一些芝麻绿豆般的小事。生活中的小细节莫轻视，多用点心把幸福掌握!很多人都觉得优秀的人是因为有天赋。其实，天赋异禀的人是很少的，真正让他们出类拔萃的是全心投入和用心付出。拥有得天独厚的优势固然重要，但更多时候，优秀靠的是日复一日的持续努力。当你转过身的时候 我的心狠狠的抽动了一下。现在我知道了这个叫作心痛。"
        }
      });
    }
  },
  // 展开收起
  contentzk:function(e){
    // console.log(e);
    if(!this.data.iszk){
      this.setData({
        iszk:true
      });
    }else{
      this.setData({
        iszk: false
      });
    }
  }
})