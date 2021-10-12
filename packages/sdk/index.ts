import FnstSDK, { install } from './utils/sdk';
import validators, { Validators } from './utils/datas/validators';
import transform, { Transform } from './utils/datas/transform';
import dom, { Dom } from './utils/dom/dom';

export type SDK = {install: typeof install}
  & Validators
  & Transform
  & Dom
;
FnstSDK.install({
  /** validators.ts */
  ...validators,
  /** transform.ts */
  ...transform,
  /** dom.ts */
  ...dom
});

export default FnstSDK as unknown as SDK; 
