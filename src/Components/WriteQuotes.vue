<template>
  <div>
    <h3>{{ title }}</h3>
    <textarea rows="5" cols="60" v-model="quote"></textarea>
    <br>
    <button @click="addQuote" class="btn btn-primary">{{ button }}</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {

    props: ['counter', 'quotes'],

    data() {
      return {
        title: 'Quote',
        quote: '',
        button: 'Add Quote'
      }
    },
    methods: {
      addQuote() {
        if (this.quote.length > 0) {         
          if (this.counter >= 10) {
            alert('limite massimo, cancella delle quotes!');
          }else {
            this.quotes.push(this.quote);
            this.counter += 1;
            this.$emit('passArray', this.quotes);
            eventBus.$emit('passCount', this.counter);
            this.quote = '';
          } 
        }else {
          alert('inserisci il testo')
        }
      }
    }
  }
</script>

<style scoped>

</style>
