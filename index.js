/**
 * Created by jufei on 2017/6/18.
 */

import getBlockType from './getBlockType';
import * as format from './format';
import './style/index.less';


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

  while (index < valueLength) {
    chunk = chunks[index];
    switch (getBlockType(chunk)){
      case 'empty':
        break;
      case '_isTitle':
        result += format.title(chunk);
        break;
      case '_isQuote':
        result += format.quote(chunk);
        break;
      case '_isCode':
      case '_isHr':
        result += '<hr/>';
        break;
      case '_isList':
      case 'noBlockType':
      default:
        result += format.image(chunk);
        break;
    }
    index++;
  }

  console.log(result);
  return result;
}





