/**
 * Created by jufei on 2017/6/18.
 */


import {inlineTypeReg} from '../commonReg'

/**
 * 引用
 * @type {RegExp}
 * @private
 */
const _quote = /^>\s+(.+)$/;

/**
 * 转换引用类型
 * @param value
 * @return {*|string|void|XML}
 */
export default function quote(value) {
  return value.replace(_quote,'<p class="ju-markdown-quote">$1</p>')
      .replace(inlineTypeReg._hasBold,'<strong>$2</strong>')
      .replace(inlineTypeReg._hasItalic,'<i>$1</i>')
      .replace(inlineTypeReg._hasMark,'<span class="ju-markdown-mark">$1</span>')
      .replace(inlineTypeReg._hasImg,function ($,$1,$2) {
        return `<img src="${$2}" title="${$1}" alt="${$1}"/>`
      })
      .replace(inlineTypeReg._hasLink,function ($,$1,$2) {
        return `<a href="${$2}">${$1}</a>`
      });
}