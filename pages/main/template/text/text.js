// pages/main/template/text/text.js
var initData="这是第一行 \n 这是第二行";
var full=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:initData
  },
  add:function(){
    full.push('其他行');
    this.setData({text:initData+"\n"+full.join('\n')})
  },
  remove:function(){
    if(full.length>0){
      full.pop();
      this.setData({text:initData+"\n"+full.join('\n')})
    }
  }
})