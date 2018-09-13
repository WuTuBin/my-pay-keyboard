import Vue from 'vue'
import App from './App.vue'
import payKeyboard from './lib/pay-keyboard.vue'
new Vue({
  el: '#app',
  render: h => h(payKeyboard)
})
