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
        while (index < valueLength - 1 && !/^```\s*$/.test(chunks[index+1])){
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
      case '_isListStart':
        let items = [chunk];
        while(index + 1 < valueLength && /^\s*([\-*+]|\d\.)\s/.test(chunks[index + 1])){
          items.push(chunks[++index])
        }
        result += format.list(items);
        index++;
        break;
      // 无特殊字符
      case 'noBlockType':
        result += format.normal(chunk);
        index++;
        break;
    }

  }

  console.log(result);
  return result;
}





