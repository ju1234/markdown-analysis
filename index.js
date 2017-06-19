/**
 * Created by jufei on 2017/6/18.
 */

import getBlockType from './getBlockType';
import * as format from './format';
import './style/index.less';


/**
 * script
 * @type {RegExp}
 * @private
 */
const _script = /<(script).*\/*>(.*<\/\1\s*>)?/gi;

/**
 * empty
 * @type {RegExp}
 * @private
 */
const _empty = /^\s*$/;
/**
 * toHTML
 * @param value
 * @return {*}
 */
export default function toHTML(value) {
  // 验证value是否为String类型，如果不是抛出异常
  if (Object.prototype.toString.call(value) !== '[object String]') {
    throw 'toHTML arguments[0] must be string'
  }

  // 验证value是否为空
  if (_empty.test(value)) {
    throw 'argument[0] is empty'
  }

  value = value.replace(_script,'');

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

  return result;
}





