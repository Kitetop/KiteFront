import FnstSDK, { install } from './utils/sdk';
import * as validators from './utils/datas/validators';
import * as transform from './utils/datas/transform';

export type SDK = {install: typeof install}
  & validators.Validators
  & transform.Transform
;
/** Install validators methods */
FnstSDK.install({
  getType: validators.getType,
  isNumber: validators.isNumber,
  /** transform.ts */
  getValueSafety: transform.getValueSafety
});

export default FnstSDK as unknown as SDK; 
