const { createApp } = Vue

createApp({
  data() {
    return {
      titleText: "Cane Coca-Cola",
      titleClass: "title",
      bgImage: "img/cane-cocacola.jpeg",
      imgClass: "img-size",
      btnClass: "btn-style",
    }
  },


  methods: {
    changeImg() {

        if(this.bgImage == "img/cane-cocacola.jpeg") {

            this.bgImage = "img/cane-cocacola1.jpg";

        } else {

            this.bgImage = "img/cane-cocacola.jpeg";

        }

    }
  },
}).mount('#app')