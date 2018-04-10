// pages/film_detail/film_detail.js
Page({
  data: {
    movie: {},
    time: ''
  },
  
  onLoad(options) {
    const id = options.id
     
    wx.request({
      url: `http://db.miaov.com/doubanapi/v0/movie/detail/${id}`,
      success: (res) => {
        const movie = res.data.data
        this.setData({
          movie
        })
      }
    })
  }
})