import FnstSDK, { install } from './utils/sdk';
import * as validators from './utils/datas/validators';

export type SDK = {install: typeof install} & validators.Validators;
/** Install validators methods */
FnstSDK.install({
  getType: validators.getType,
  isNumber: validators.isNumber
});

export default FnstSDK as unknown as SDK; 
