import FnstSDK, { install } from './utils/sdk';
import * as validators from './utils/datas/validators';
export interface SDK {
  install: typeof install;
  getType: typeof validators.getType;
  isNumber: typeof validators.isNumber
}

/** Install validators methods */
FnstSDK.install({
  getType: validators.getType,
  isNumber: validators.isNumber
});

export default FnstSDK as unknown as SDK; 
