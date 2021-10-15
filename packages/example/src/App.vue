<template>
  <div id="app" style="height: 100%">
    <Test></Test>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import Test from './views/official/index';

@Component({
  components: { Test }
})
export default class App extends Vue {

}
</script>
