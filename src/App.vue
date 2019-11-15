<template>
  <div>
    <div class="container">
      <div class="row">
        <appCounterQuotes :counter="counter"></appCounterQuotes>
      </div>
      <div class="row text-center">
        <appWriteQuotes :quotes="quotes" :counter="counter" @passArray="quotes = $event"></appWriteQuotes>
      </div>
      <br>
      <div class="row">
        <!-- con native faccio riferimento all'elemento nativo-corrente -->
        <appQuotes v-for="(n, i) in quotes" :key="i" @click.native="deleteItem(i)">
          <div class="col-sm-4 col-md-2">
            <div class="thumbnail">
              <div class="caption">
                <p>{{ n }}</p>
              </div>
            </div>
          </div>
        </appQuotes>
      </div>
      <br>
      <div class="row text-center">
        <div class="alert alert-info" role="alert">Info: Click on a Quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
    import { eventBus } from './main';

    import CounterQuotes from './Components/CounterQuotes.vue';
    import WriteQuotes from './Components/WriteQuotes.vue';
    import Quotes from './Components/Quotes.vue';

    export default {

      data() {
        return {
          counter: 1,
          quotes: ['ciao luca']
        }
      },

      methods: {
        deleteItem(i) {
          this.quotes.splice(i, 1);
          this.counter -= 1;
        }
      },
      created() {
        eventBus.$on('passCount', (data) => {
          this.counter = data;
        })
      },

      components: {
        appCounterQuotes: CounterQuotes,
        appWriteQuotes: WriteQuotes,
        appQuotes: Quotes,
      }
    }

</script>

<style>
</style>
