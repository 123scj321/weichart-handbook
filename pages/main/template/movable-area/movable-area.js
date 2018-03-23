// pages/main/template/movable-area/movable-area.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  x:0,
  y:0
  },
  tap:function(){
    this.setData({x:30,y:30})
  }
})