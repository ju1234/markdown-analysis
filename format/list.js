/**
 * Created by jufei on 2017/6/19.
 */

import {inlineTypeReg} from '../commonReg';

const _ul = /(?:^|\n)((?:\*|\-|\+)\s.+(?:(?:\n(?:.*\n)?)(?:(?:\s)*(?:\*|\-|\+|\d\.).+)*)*)(?=\n|$)/gi;
const _ol = /(?:^|\n)((?:\d\.)\s.+(?:(?:\n)(?:.*\n)?(?:(?:\s)*(?:\*|\-|\+|\d\.).+)*)*)(?=\n|$)/gi;

/**
 * list
 * @param items
 * @return {string|*}
 */
export default function list(items) {
  let string = items.join('\n').replace(inlineTypeReg._hasBold, '<strong>$2</strong>')
      .replace(inlineTypeReg._hasItalic,'<i>$1</i>')
      .replace(inlineTypeReg._hasMark,'<span class="ju-markdown-mark">$1</span>')
      .replace(inlineTypeReg._hasImg,function ($,$1,$2) {
        return `<img src="${$2}" title="${$1}" alt="${$1}"/>`
      })
      .replace(inlineTypeReg._hasLink,function ($,$1,$2) {
        return `<a href="${$2}">${$1}</a>`
      });
  // result = '';
  if (/\d/.test(string[0])) {
    string = toOl(string)
  } else {
    string = toUl(string)
  }
  return string;
}

/**
 * convert to ul
 * @param value
 * @return {XML|string|*}
 */
function toUl(value) {
  // 找出满足无序列表条件的字符串
  value = value.replace(_ul, function ($1) {
    let result = '';
    // 根据换行符之后没有空格切割字符串 因为二级列表之前必定有空格
    $1.split(/\n[*+-]/g).map(item => {
      result += `<li>\n${item}\n</li>`
    });
    // 去除下级列表标志前的空格
    result = ('\n<ul>' + result.replace(/\n[\-+*]\s/g, '').replace(/\s([\-+*])|\s(\d\.)/g, '$1$2') + '</ul>');
    console.log(result)
    console.log(/<li>(\w+)<\/li>/g.test(result))
    return result
  });

  value = _ul.test(value) ? toUl(value) : value;
  value = _ol.test(value) ? toOl(value) : value;

  // 去除空的li标签
  value = value.replace(/<li>\s*<\/li>/g, '');

  return value;
}

/**
 * convert to ol
 * @param value
 * @return {XML|string|*}
 */
function toOl(value) {
  value = value.replace(_ol, function ($1) {
    let result = '';
    $1.split(/\n\d\./g).map(item => {
      result += `<li>\n${item}\n</li>`
    });
    return '\n<ol>' + result.replace(/\n\d\.\s/g, '').replace(/\s([\-+*])|\s(\d\.)/g, '$1$2') + '</ol>'
  });

  value = value.replace(/ ([\-+*])/g, '$1');

  value = _ol.test(value) ? toOl(value) : value;
  value = _ul.test(value) ? toUl(value) : value;

  value = value.replace(/<li>\s*<\/li>/g, '')

  return value;
}