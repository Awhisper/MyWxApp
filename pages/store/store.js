Page({
  data:{
    // text:"这是一个页面"
    motto: 'Hello World',
    bannerData: [],
    listData: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var self = this;
    wx.request({
        url:'XXXX',
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
           if(res.data.status.code == 0){
              self.setData({
                bannerData : res.data.data.promote_area
              });
              console.log(self.data.bannerData);
           }
        }
    });

    wx.request({
        url:'XXXX',
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
           if(res.data.status.code == 0){
              self.setData({
                listData : res.data.data.column_area
              });
              console.log(self.data.listData);
           }
        }
    });

    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})