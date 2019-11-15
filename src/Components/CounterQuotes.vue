<template>
  <div>
    <h3><strong>{{ title }}</strong></h3>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
            :style="{width: counter * 10 + '%'}">
        {{ counter }} /10
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {

    props: {
      counter: {
        type: Number,
        default: 1
      }
    },

    data() {
      return {
        title: 'Quotes Added'
      }
    },

    created() {
      eventBus.$on('passCount', (data) => {
        this.counter = data ;
      });
    }
  }

</script>

<style scoped>

</style>
