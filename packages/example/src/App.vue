<template>
  <div id="app" style="height: 100%">
    <Test></Test>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import KiteSDK from 'sdk';
import Test from './views/official/index';

@Component({
  components: { Test }
})
export default class App extends Vue {
  // private $observe: MutationObserver | ResizeObserver;
  private kiteResizeObserve = null;

  mounted() {
    const targetNode = document.getElementById('app');
    const kiteResizeObserve = new KiteSDK.KiteResizeObserver(() => {
      // console.log(lists, 'jjjjj');
    }).createResizeEvent();
    kiteResizeObserve.observe(targetNode);
  }
}
</script>
