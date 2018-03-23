// pages/main/template/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  formSubmit:function(e){
    console.log('form表单被提交',e.detail.value);
  },
  formReset:function (e) {
    console.log('form表单被撤销', e.detail.value);
  }
})