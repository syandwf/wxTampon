// pages/record/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year:new Date().getFullYear(),
    month:new Date().getMonth() + 1,
    day: new Date().getDate(),
    isShow:true,
    days_style:[
      { month: 'current', day: 28, color: 'white', background: 'rgba(252, 88, 113, 0.4)' },
      { month: 'current', day: 29, color: 'white', background: 'rgba(252, 88, 113, 0.4)' },
      { month: 'current', day: 30, color: 'white', background: 'rgba(252, 88, 113, 0.4)' },
      { month: 'current', day: 31, color: 'white', background: 'rgba(252, 88, 113, 0.4)' },
      { month: 'next', day: 1, color: 'white', background: 'rgba(252, 88, 113, 0.4)' },
      { month: 'current', day: new Date().getDate(), color: 'white', background: 'rgb(255,215,0)' },
      { month: 'current', day: 0, color: '#4a4f74', background: 'white' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(new Date().getFullYear(),new Date().getMonth() + 1, new Date().getDate());
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
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value);
  },
  switch2Change: function (e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  },
  // 日历控件上一个月
  prev: function (e) {
    // console.log(e);
    this.curMonthStyle(e);
  },
  // 日历控件下一个月
  next:function(e){
    // console.log(e);
    this.curMonthStyle(e);
  },
  // 顶部日期改变
  dateChange:function(e){
    // console.log(e);
    this.curMonthStyle(e);
  },
  // 点击日期
  dayClick: function (e) {
    // console.log(e);
    // 点击的设置样式
    var len = this.data.days_style.length - 1;
    var day = 'days_style[' + len + '].day';
    var color = 'days_style[' + len + '].color';
    var bg = 'days_style[' + len + '].background';
    var isShow = false;
    // console.log(this.data.year, this.data.month);
    // 判断是否当日
    if ((e.detail.year == this.data.year) && (e.detail.month == this.data.month) && (e.detail.day == this.data.day)) {
      isShow = true;
    }
    this.setData({
      isShow: isShow,
      [day]: e.detail.day,
      [color]: 'white',
      [bg]: 'rgb(0,255,0)'
    });
  },
  // 设置当前月份日期的样式
  curMonthStyle:function(e){
    // console.log(this.data.days_style.length);
    var len = this.data.days_style.length - 2;
    var color = 'days_style[' + len + '].color';
    var bg = 'days_style[' + len + '].background';
    // console.log(color,bg);
    if ((e.detail.currentYear == new Date().getFullYear())&&(e.detail.currentMonth == new Date().getMonth() + 1)) {
      this.setData({
        [color]:'white',
        [bg]:'rgb(255,215,0)'
      });
    } else {
      this.setData({
        [color]: '#4a4f74',
        [bg]: 'white'
      });
    }
  },
  // 返回今天
  backToday:function(){
    var len = this.data.days_style.length - 2;
    var color = 'days_style[' + len + '].color';
    var bg = 'days_style[' + len + '].background';
    var len1 = this.data.days_style.length - 1;
    var day = 'days_style[' + len1 + '].day';

    this.setData({
      year: this.data.year,
      month: this.data.month,
      isShow:true,
      [color]: 'white',
      [bg]: 'rgb(255,215,0)',
      [day]: 0,
    });
  },
})