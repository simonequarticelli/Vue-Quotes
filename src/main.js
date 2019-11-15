import Vue from 'vue'
import App from './App.vue'

// eventBus => sibling - siblings
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
