import Vue from 'vue';
import Component from 'vue-class-component';
import FnstSDK from 'sdk';

@Component
export default class Test extends Vue {
  public value: number = 1;

  public width: number = 100;

  public handleClick(): void {
    this.value++;
    this.width /= this.value;
  }

  public created() {
    document.addEventListener('click', this.checkNode);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('click', this.checkNode);
    });
  }

  public checkNode(event: Event) {
    FnstSDK.checkEventTargetNodeBelong(event, document.getElementById('bootom'));
  }

  public render() {
    return (
      <div>
        <div style={`border:1px solid red; width: ${this.width}%`}>
          <button onClick = { this.handleClick}>点我 { FnstSDK.getType({}) }</button>
          { this.value }
          <p>isNumber('1.23'): <span>{ `${FnstSDK.isNumber('1.23')}` }</span></p>
          <p>isNumber(1.23): { `${FnstSDK.isNumber(1.23)}` }</p>
          <p>isNumber(0): { `${FnstSDK.isNumber(0)}` }</p>
          <p>isNumber(NaN): { `${FnstSDK.isNumber(NaN)}` }</p>
          <p>isNumber(-1.23): { `${FnstSDK.isNumber(-1.23)}` }</p>
          <p>isNumber(object): { `${FnstSDK.isNumber({})}` }</p>
          <p>isNumber(array): { `${FnstSDK.isNumber([1])}` }</p>
          <p>isNumber(array): { `${FnstSDK.getValueSafety([0, 1], { 2: { 1: null } })}` }</p>
        </div>
        <div style={`border:1px solid green; width: ${this.width}%; height: 300px`} id='bootom'></div>
      </div>
    );
  }
}
