// pages/main/frame/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mesage:"hello world",
    array:[1,2,3,4,5],
    view:'MINE',
    staffA:{firstName:"刘",lastName:"倩"},
    staffB: { firstName: "靳", lastName: "伟龙" },
    staffC: { firstName: "王", lastName: "龙辉" },
    count:0
  },
  add:function(e){
    this.setData({
      count:this.data.count+1
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