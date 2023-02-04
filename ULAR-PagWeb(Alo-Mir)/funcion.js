const app=Vue.createApp({
  data(){
    return{
      cart:0,
      producto: 'Bomb Top',
      image: 'fotos/foto2.jpg',
      image2: 'fotos/foto2.2.jpg',
      name:'Bomb Top',
      precio:'$130',
      details: ['Hecho a mano','Viene en diferentes colores'],
      variants:[
        {tipo:'Pink',image:'fotos/foto2.jpg',image2: 'fotos/foto2.2.jpg',name:'Pink Bomb Top',precio:'$130',},
        {tipo:'Black',image:'fotos/foto2.6.jpg',image2: 'fotos/foto2.3.jpg',name:'Black Bomb Top',precio:'$130',},
        {tipo:'Cow',image:'fotos/foto2.4.jpg',image2: 'fotos/foto2.5.jpg',name:'Cow Bomb Top',precio:'$130',},
      ]
    }
  },

  methods:{
    updateImage(variantImage){
      this.image=variantImage
    },
    updateImage2(variantImage2){
      this.image2=variantImage2
    },
    updateName(variantName){
      this.name=variantName
    },
    updatePrecio(variantPrecio){
      this.precio=variantPrecio
    },

    addToCart(){
      this.cart+=1
    },

    removeCart(){
      if(this.cart>=1){
        this.cart-=1
      }
    },
  }


})
