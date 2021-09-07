import Vue from 'vue';
import Component from 'vue-class-component';
import { sdk } from 'sdk';

@Component
export default class Test extends Vue {
  public value: number = 1;
  public width: number = 100;

  public handleClick(): void {
    this.value++;
    this.width = this.width / this.value;
  }
  public render() {
    return (
      <div style={`border:1px solid red; width: ${this.width}%`}>
        <button onClick = { this.handleClick}>点我 { sdk() }</button>
        { this.value }
      </div>
    );
  }
}
