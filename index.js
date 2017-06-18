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
      // 空行
      case 'empty':
        index++;
        break;
      // 标题
      case '_isTitle':
        result += format.title(chunk);
        index++;
        break;
      // 引用
      case '_isQuote':
        result += format.quote(chunk);
        index++;
        break;
      // 代码
      case '_isCode':
        let codeChunks = [chunk];
        while (!/^```\s*$/.test(chunks[index+1]) && index < valueLength - 1){
          codeChunks.push(chunks[++index])
        }
        codeChunks.push(chunks[++index]);
        result += format.code(codeChunks);
        index++;
        break;
      // 分割线
      case '_isHr':
        result += '<hr/>';
        index++;
        break;
      // 列表
      case '_isList':
      // 无特殊字符
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





