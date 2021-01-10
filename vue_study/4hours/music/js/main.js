var app = new Vue({
  el: '#player',
  data: {
    query: '七里香',
    musicList: [],
    musicUrl: ""
  },
  methods: {
    searchMusic() {
      var vu = this;
      axios.get("https://autumnfish.cn/search?keywords="+this.query).then(function(response){
        // console.log(response);
        vu.musicList = response.data.result.songs;
      },function(err){
        console.log(err);
      })
    },
    playMusic(musicId) {
      var vu = this;
      axios.get("").then(function(response){
        // vu.musicUrl = response.data.data[0].url;
        console.log(response);
      },function(err){
        console.log(1);
      })
    }
  }
})