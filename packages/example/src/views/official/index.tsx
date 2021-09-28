import Vue from 'vue';
import Component from 'vue-class-component';
import Sider from './sider/index.vue';
import './index.scss';

@Component({
  name: 'Official',
  components: { Sider }
})
export default class Layout extends Vue {

  private render() {
    return (
      <a-layout style='height: 100%'>
        <a-layout-sider theme='light' width='300'><Sider /></a-layout-sider>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
    );
  }
}
