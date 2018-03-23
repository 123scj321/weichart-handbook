// pages/main/template/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['img/(1).jpg', 'img/(2).jpg', 'img/(3).jpg'],
    indicatorDots:true,
    autoplay:true,
    interval:1000,
    duration:5000
  },
  changeIndicatorDots:function(e){
    this.setData({indicatorDots:!this.data.indicatorDots});
  },
  changeAutoplay:function(){
    this.setData({ autoplay: !this.data.autoplay});
  },
  intervalChange:function(e){
    console.log(e.detail.value);
    this.setData({ interval:e.detail.value})
  },
  durationChange:function(e){
    console.log(e.detail.value);
    this.setData({interval:e.detail.value})
  }
})