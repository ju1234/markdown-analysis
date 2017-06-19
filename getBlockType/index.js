/**
 * Created by jufei on 2017/6/18.
 */


import {blockTypeReg} from '../commonReg';


/**
 * get value block type
 * @param value
 * @return {string} [_isTitle,_isQuote,_isCode,_isHr,_isListStart,noBlockType,empty]
 */

function getBlockType(value) {
  if(value === '') return 'empty';
  for(let i in blockTypeReg){
    if(blockTypeReg[i].test(value)) return i;
  }
  return 'noBlockType';
}



export default getBlockType;