import FnstSDK, { install } from './utils/sdk';
import * as validators from './utils/validators';
export interface SDK {
  install: typeof install;
  getType: typeof validators.getType;
}
/** Validators */
FnstSDK.install('getType', validators.getType);
export default FnstSDK as unknown as SDK; 
