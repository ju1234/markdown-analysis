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
        index++;
        break;
      case '_isTitle':
        result += format.title(chunk);
        index++;
        break;
      case '_isQuote':
        result += format.quote(chunk);
        index++;
        break;
      case '_isCode':
        let codeChunks = [chunk];
        while (!/^```\s*$/.test(chunks[index+1]) && index < valueLength - 1){
          codeChunks.push(chunks[++index])
        }
        codeChunks.push(chunks[++index]);
        result += format.code(codeChunks);
        index++;
        break;
      case '_isHr':
        result += '<hr/>';
        index++;
        break;
      case '_isList':
      case 'noBlockType':
      default:
        // result += format.image(chunk);
        index++;
        break;
    }

  }

  console.log(result);
  return result;
}





