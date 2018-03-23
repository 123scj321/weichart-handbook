// pages/main/template/button/button.js 
var types=["default","primary","warn"];
var pageObject={
  data:{
      defaultSize:'default',
      primarySize:'default',
      warnSize: 'default',
      disabled:false,
      plain:false,
      loading:false
    },
    setDisabled:function(e){
      this.setData({disabled:!this.data.disabled})
    },
    setPlain:function(e){
      this.setData({ plain: !this.data.plain })
    },
    setLoading: function (e) {
      this.setData({ loading: !this.data.loading })
    }
}
for(var i=0;i<types.length;i++){
  (function(types){
    pageObject[types]=function(e){
      var key=types+'Size';
      var changeData={};
      changeData[key]=this.data[key]=="default"?"mini":"default";
      this.setData(changeData)
    }
  })(types[i])
}
Page(pageObject)