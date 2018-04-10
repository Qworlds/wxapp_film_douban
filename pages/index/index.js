// pages/index/index.js
Page({
  data: {
    films: [],
    film_poster: [
      { url: '/assets/poster/poster0.jpg'},
      { url: '/assets/poster/poster1.jpg' },
      { url: '/assets/poster/poster2.jpg' },
      { url: '/assets/poster/poster3.jpg' }
    ],    
    page: 1,
    size: 6,
    loading: true
  },

  onLoad(options) {
    this.loadFilms()
  },


  loadFilms() {
    const { size, page } = this.data
    this.setData({
      loading: true
    })
    wx.request({
      url: `http://db.miaov.com/doubanapi/v0/movie/list?page=${page}&size=${size}`,
      //es6的箭头函数 =>使内部的this指向外部的this
      success: (res) => {
        const { data } = res.data
        const films = this.data.films || []

        for (let i = 0; i < data.length; i += 2) {
          films.push([data[i], data[i + 1] ? data[i + 1] : null])
        }

        this.setData({
          films,
          loading: false
        })
      }
    })
  },

  scrollHandler() {
    const { page } = this.data;
    this.setData({
      page: page + 1
    })
    this.loadFilms();
  },
  
  gotoDetail(e) {
    const { movieData } = e.currentTarget.dataset
    const { _id } = movieData

    wx.navigateTo({
      url: '../film_detail/film_detail?id=' + _id
    })
  }
  
})