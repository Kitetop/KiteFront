<template>
  <div id="app">
    <Test></Test>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import Test from './views/Test';
@Component({
  components: { Test }
})
export default class App extends Vue {

}
</script>
