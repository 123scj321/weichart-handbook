// pages/main/frame/frame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  wxml:function(){
    wx.navigateTo({
      url: 'wxml/wxml',
    })
  },
  dataBind:function(){
    wx.navigateTo({
      url: 'dataBind/dataBind',
    })
  },
  listAdd:function(){
    wx.navigateTo({
      url: 'listAdd/listAdd',
    })
  },
  elseIf:function(){
    wx.navigateTo({
      url: 'elseIf/elseIf',
    })
  },
  template:function(){
    wx.navigateTo({
      url: 'template/template',
    })
  },
  event:function(){
    wx.navigateTo({
      url: 'event/event',
    })
  },
  import:function(){
    wx.navigateTo({
      url: 'import/import',
    })
  },
  wxs:function(){
    wx.navigateTo({
      url: 'wxs/wxs',
    })
  },
  wxsModule:function(){
    wx.navigateTo({
      url:'wxsModule/wxsModule'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  }
})