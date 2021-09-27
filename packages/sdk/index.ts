import FnstSDK, { install } from './utils/sdk';
import * as validators from './utils/datas/validators';
import * as transform from './utils/datas/transform';
import * as sdkDom from './utils/dom/dom';

export type SDK = {install: typeof install}
  & validators.Validators
  & transform.Transform
  & sdkDom.Dom
;
/** Install validators methods */
FnstSDK.install({
  getType: validators.getType,
  isNumber: validators.isNumber,
  /** transform.ts */
  getValueSafety: transform.getValueSafety,
  /** dom.ts */
  checkEventTargetNodeBelong: sdkDom.checkEventTargetNodeBelong
});

export default FnstSDK as unknown as SDK; 
