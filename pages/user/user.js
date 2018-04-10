// page/user/user.js
Page({
  data: {
    avatarUrl: '',
    nickName: '',
    gender:'',
    //url1:'assets/image/sexm.png',
    films: []
  },

  onLoad :function(options) {
    wx.getUserInfo({
      success: (res) => {        
        this.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
          gender:res.userInfo.gender,
          
        })
        
      }
    })
  },

  gotoShare() {
    wx.navigateTo({
      url: '../share/share',
    })
  },

})