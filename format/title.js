/**
 * Created by jufei on 2017/6/18.
 */

import {inlineTypeReg} from '../commonReg';

/**
 * 匹配标题1，2，3，4，5，6 #
 * @type {RegExp}
 */
const _h1 = /^#\s+(.+)$/;

const _h2 = /^#{2}\s+(.+)$/;

const _h3 = /^#{3}\s+(.+)$/;

const _h4 = /^#{4}\s+(.+)$/;

const _h5 = /^#{5}\s+(.+)$/;

const _h6 = /^#{6}\s+(.+)$/;


function title(value) {
  value = value
      .replace(_h1, '<h1>$1</h1>')
      .replace(_h2, '<h2>$1</h2>')
      .replace(_h3, '<h3>$1</h3>')
      .replace(_h4, '<h4>$1</h4>')
      .replace(_h5, '<h5>$1</h5>')
      .replace(_h6, '<h6>$1</h6>')
      .replace(inlineTypeReg._hasBold,'<strong>$2</strong>')
      .replace(inlineTypeReg._hasItalic,'<i>$1</i>')
      .replace(inlineTypeReg._hasMark,'<span class="ju-markdown-mark">$1</span>')


  // // 行内样式
  // if(){
  //
  // }
  return value;
}


export default title;