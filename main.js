const app = Vue.createApp({
  data() {
    return {
      product: 'Sock',
      image: './assets/images/socks_green.jpg',
      description: 'This is a good sock for your winter',
      url: 'https://homefinderapp.netlify.app/',
      a: 'This is a property',
      b: 'This is b property',
    };
  },

  created() {
    this.$watch('a', (newVal, oldVal) => {
      console.log('This is new value', newVal);
      console.log('This is old value', oldVal);
    });
  },
});
