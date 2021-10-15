/* eslint-disable no-unused-vars */
import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    // eslint-disable-next-line
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
