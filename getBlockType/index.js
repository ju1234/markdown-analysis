/**
 * Created by jufei on 2017/6/18.
 */


import {blockTypeReg} from '../Reg';


/**
 * get value type
 * @param value
 * @return {string} [_isTitle,_isQuote,_isCode,_isHr,_isList,_isNormal]
 */
function getBlockType(value) {
  for(let i in blockTypeReg){
    if(blockTypeReg[i].test(value)) return i;
  }
  return '_isNormal';
}



export default getBlockType;