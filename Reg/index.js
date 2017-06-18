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
const _isImg = /!\[.*\](\(.+\)|\[.+\])/g;


/**
 * link
 * @type {RegExp}
 * @private
 */
const _isLink = /\[.*\](\(.+\)|\[.+\])/g;


/**
 * bold
 * @type {RegExp}
 */
const _isBold = /(\*\*).+\1/g;


/**
 * italic
 * @type {RegExp}
 */
const _isItalic = /\*.+\*/g;

/**
 * code
 * @type {RegExp}
 * @private
 */
const _isCode = /^`{3}$/;


/**
 * hr
 * @type {RegExp}
 * @private
 */
const _isHr = /^([*\-]\s){3,}/;

/**
 * list
 * @type {RegExp}
 * @private
 */
const _isList = /^([\-*+]|\d\.)\s/;


/**
 * mark
 * @type {RegExp}
 * @private
 */
const _isMark = /`.+`/g;