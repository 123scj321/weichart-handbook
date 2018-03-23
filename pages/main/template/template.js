// pages/main/template/template.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  view:function(){
    wx.navigateTo({
      url: 'view/view',
    })
  },
  scrollView:function(){
    wx.navigateTo({
      url: 'scrollView/scrollView',
    })
  },
  swiper:function(){
    wx.navigateTo({
      url: 'swiper/swiper',
    })
  },
  movableArea:function(){
    wx.navigateTo({
      url: 'movable-area/movable-area',
    })
  },
  coverView:function(){
    wx.navigateTo({
      url: 'coverVIew/coverView',
    })
    },
    icon:function(){
      wx.navigateTo({
        url: 'icon/icon',
      })
    },
    text:function(){
      wx.navigateTo({
        url: 'text/text',
      })
    },
    progress:function(){
      wx.navigateTo({
        url: 'progress/progress',
      })
    },
    button:function(){
      wx.navigateTo({
        url: 'button/button',
      })
    },
    checkBox:function(){
      wx.navigateTo({
        url: 'checkBox/checkBox',
      })
    },
    form:function(){
      wx.navigateTo({
        url: 'form/form',
      })
    },
    input:function(){
      wx.navigateTo({
        url: 'input/input',
      })
    },
    label:function(){
      wx.navigateTo({
        url: 'label/label',
      })
    },
    picker:function(){
      wx.navigateTo({
        url: 'picker/picker',
      })
    },
    pickerView: function () {
      wx.navigateTo({
        url: 'picker-view/picker-view',
      })
    },
    radio: function () {
      wx.navigateTo({
        url: 'radio/radio',
      })
    },
    slider: function () {
      wx.navigateTo({
        url: 'slider/slider',
      })
    },
    switch: function () {
      wx.navigateTo({
        url: 'switch/switch',
      })
    },
    textarea: function () {
      wx.navigateTo({
        url: 'textarea/textarea',
      })
    },
    audio: function () {
      wx.navigateTo({
        url: 'audio/audio',
      })
    },
    image: function () {
      wx.navigateTo({
        url: 'image/image',
      })
    },
    video: function () {
      wx.navigateTo({
        url: 'video/video',
      })
    },
    camera: function () {
      wx.navigateTo({
        url: 'camera/camera',
      })
    },
    map: function () {
      wx.navigateTo({
        url: 'map/map',
      })
    },
    canvas: function () {
      wx.navigateTo({
        url: 'canvas/canvas',
      })
    },
    navigator:function(){
      wx.navigateTo({
        url: 'navigator/navigator',
      })
    }
    
})