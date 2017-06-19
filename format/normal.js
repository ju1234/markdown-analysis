/**
 * Created by jufei on 2017/6/19.
 */

import {inlineTypeReg} from '../commonReg';


// 无块级样式
export default function normal(value) {
  return `<p>${
      value
          .replace(inlineTypeReg._hasBold, '<strong>$2</strong>')
          .replace(inlineTypeReg._hasItalic, '<i>$1</i>')
          .replace(inlineTypeReg._hasMark, '<span class="ju-markdown-mark">$1</span>')
          .replace(inlineTypeReg._hasImg, function ($, $1, $2) {
            return `<img src="${$2}" title="${$1}" alt="${$1}"/>`
          })
          .replace(inlineTypeReg._hasLink, function ($, $1, $2) {
            return `<a href="${$2}">${$1}</a>`
          })}
        </p>`
}