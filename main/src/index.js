
import Vue from "vue";

import axios from "axios";

import comp from "./components/style";

const app = new Vue({
  el: '#app',
  data: {
    input: "",
    hits: [],
    comp
  },
  methods: {
    seach: function(event){
      event.preventDefault();
      const url = "https://pixabay.com/api/?key=18326997-ac4fe10061b85cd069bf2c4d8&q="+encodeURIComponent(this.input)+"&orientation=horizontal&per_page=40";
      axios.get(url)
     .then((res) => this.hits = res.data.hits)
     .then(function(data) {
       if( data.length == 0 ) {
      alert('該当する写真がありません');
        }
      })
    },
  }
})