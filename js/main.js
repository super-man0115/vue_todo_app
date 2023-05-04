const app = Vue.createApp({
  data: () => ({
    message: 'Hello <span style="color:red">Vue.js!</span>',
    number: 100,
    ok: true,
    url: 'https://www.google.com/',
  }),
  methods: {
    clickHandler: function(event) {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
app.mount('#app')    