/**
 * Created by jufei on 2017/6/8.
 *
 * creator: ju1234
 * describe: RegExc to make string convert to HTML
 *
 */


/**
 * 匹配标题1，2，3，4，5，6 #
 * @type {RegExp}
 */
const _h1 = /(?=^|\n)#\s(.+)(?=\n|$)/gi;
const _h2 = /(?=^|\n)#{2}\s(.+)(?=\n|$)/gi;
const _h3 = /(?=^|\n)#{3}\s(.+)(?=\n|$)/gi;
const _h4 = /(?=^|\n)#{4}\s(.+)(?=\n|$)/gi;
const _h5 = /(?=^|\n)#{5}\s(.+)(?=\n|$)/gi;
const _h6 = /(?=^|\n)#{6}\s(.+)(?=\n|$)/gi;

/**
 * 匹配引用 >
 *
 * @type {RegExp}
 */
const _quote = /(?=^|\n)>\s(.+)(?=\n|$)/gi;

/**
 * 匹配分割线 ***
 *
 * @type {RegExp}
 */
const _hr = /(?=^|\n)(\*{3})(?=\n|$)/gi;

/**
 * 匹配无序列表 + * -
 *
 * @type {RegExp}
 */
const _ul = /(?=^|\n)((?:\*|\-|\+).+(?:(?=\n)(?:(?=\s|\t)*(?:\*|\-|\+).+)*)*)(?=\n|$)/gi;

/**
 * 匹配有序列表 1. 2. 3.
 *
 * @type {RegExp}
 * @private
 */
const _ol = /(?=^|\n)((?:\d+\.\s).+(?:(?=\n)(?:(?=\s|\t)*(?:\d+\.\s).+)*)*)(?=\n|$)/gi;


/**
 * 匹配斜体 *... *
 *
 * 转换时粗体优先，否则会又诡异的事情发生，发生什么我不说
 *
 * @type {RegExp}
 * @private
 */
const _italic = /\*(.+)\*/gi;


/**
 * 匹配粗体 **...**
 *
 * @type {RegExp}
 * @private
 */
const _bold = /\*\*(.+)\*\*/gi;

/**
 * 匹配标记 `...`
 *
 * @type {RegExp}
 * @private
 */

const _mark = /`(.+)`/gi;


export default {
  _h1,
  _h2,
  _h3,
  _h4,
  _h5,
  _h6,
  _quote,
  _hr,
  _ul,
  _ol,
  _italic,
  _bold,
  _mark
}
