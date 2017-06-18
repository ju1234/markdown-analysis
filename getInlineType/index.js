/**
 * Created by jufei on 2017/6/18.
 */


import {inlineTypeReg} from '../commonReg';

/**
 * get inline type
 * @param value
 * @return {*}
 */
function getInlineType(value) {
  for(let i in inlineTypeReg){
    if(inlineTypeReg[i].test(value)) return i;
  }

  return 'noInlineType';
}

export default getInlineType;