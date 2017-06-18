/**
 * Created by jufei on 2017/6/18.
 */

import getBlockType from './getBlockType';
import * as format from './format';


/**
 * toHTML
 * @param value
 * @return {*}
 */
export default function toHTML(value) {
  let chunks= value.split('\n'),
      chunk = '',
      valueLength = chunks.length,
      index = 0,
      result = '';

  console.log(chunks)
  while (index < valueLength) {
    chunk = chunks[index];
    console.log(chunk)
    switch (getBlockType(chunk)){
      case '_isTitle':
        result += format.title(chunk);
        break;
      case '_isQuote':
      case '_isCode':
      case '_isHr':
      case '_isList':
      case 'noBlockType':
      default:
        result += chunk;
        break;
    }
    index++;
  }

  console.log(result)
  return result;
}





