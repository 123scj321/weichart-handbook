// pages/main/template/checkBox/checkBox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {name:'USA',value:"美国"},
      { name: 'CHA', value: "中国", checked:'true'},
      {name:"JAP",value:"日本"}
    ]
  },
  changeboxChange:function(e){
    console.log('checkbox发生change事件'+e.detail.value);
  }
})