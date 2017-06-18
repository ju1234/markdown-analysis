/**
 * Created by jufei on 2017/6/18.
 */

/**
 * h1 - h6
 * @type {RegExp}
 */
const _isTitle = /^#{1,6}\s+/g;


/**
 * 引用
 * @type {RegExp}
 */
const _isQuote = /^>\s+/g;

/**
 * image
 * @type {RegExp}
 * @private
 */
const _hasImg = /!\[.*\](\(.+\)|\[.+\])/g;


/**
 * link
 * @type {RegExp}
 * @private
 */
const _hasLink = /\[.*\](\(.+\)|\[.+\])/g;


/**
 * bold
 * @type {RegExp}
 */
const _hasBold = /(\*\*).+\1/g;


/**
 * italic
 * @type {RegExp}
 */
const _hasItalic = /\*.+\*/g;

/**
 * code
 * @type {RegExp}
 * @private
 */
const _isCode = /^`{3}/;


/**
 * hr
 * @type {RegExp}
 * @private
 */
const _isHr = /^\s*([*\-]\s*){3,}/;

/**
 * list
 * @type {RegExp}
 * @private
 */
const _isList = /^\s*([\-*+]|\d\.)\s/;


/**
 * mark
 * @type {RegExp}
 * @private
 */
const _hasMark = /`.+`/g;




export const blockTypeReg = {
  _isTitle,
  _isQuote,
  _isCode,
  _isHr,
  _isList,
};

export const inlineTypeReg = {
  _hasImg,
  _hasLink,
  _hasBold,
  _hasItalic,
  _hasMark
};


export default {
  blockTypeReg,
  inlineTypeReg
}