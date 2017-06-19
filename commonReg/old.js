/**
 * Created by jufei on 2017/6/8.
 *
 * creator: ju1234
 * describe: RegExc to make string convert to HTML
 *
 */





/**
 * 匹配引用 >
 *
 * @type {RegExp}
 */
const _quote = /(?:^|\n)>\s(.+)(?=\n|$)/gi;

/**
 * 匹配分割线 ***
 *
 * @type {RegExp}
 */
const _hr = /(?:^|\n)(\*{3})(?=\n|$)/gi;

/**
 * 匹配无序列表 + * -
 *
 * @type {RegExp}
 */
// const _ul = /(?:^|\n)((?:\*|\-|\+)\s.+(?:(?:\n)(?:(?:\s)*(?:\*|\-|\+|\d\.).+)*)*)(?=\n|$)/gi;

/**
 * 匹配有序列表 1. 2. 3.
 *
 * @type {RegExp}
 * @private
 */
// const _ol = /(?:^|\n)((?:\d\.)\s.+(?:(?:\n)(?:(?:\s)*(?:\*|\-|\+|\d\.).+)*)*)(?=\n|$)/gi;


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
const _mark = /`(.+?)`/gi;

/**
 * 匹配图片  ![title](url)
 *
 * @type {RegExp}
 * @private
 */
const _img = /(?=\!)\[(.*)\]\((.+)\)(?!\[)/gi;

/**
 * 匹配链接   [alias](url)
 *
 * @type {RegExp}
 * @private
 */
const _link = /\[(.*)\]\((.+)\)(?!\[)/gi;

/**
 * 匹配代码框    ```(type) code ```
 *
 * @type {RegExp}
 * @private
 */
const _code = /(?:^|\n)`{3}(.*)\n((?:.+\n+)*?)`{3}(?=\n|$)/g;

/**
 * 匹配空字符串
 *
 * @type {RegExp}
 * @private
 */
const _empty = /^\s*$/;

/**
 * 匹配script标签
 *
 * @type {RegExp}
 * @private
 */
const _script = /<(script).*\/*>(.*<\/\1\s*>)?/gi;


const _li = /(?:\n)\* (.+\n( \* .+(\n?))*)/gi;


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
  _mark,
  _img,
  _link,
  _code,
  _empty,
  _script,
  _li
}
