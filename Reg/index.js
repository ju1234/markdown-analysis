/**
 * Created by jufei on 2017/6/8.
 */


/**
 * 匹配标题1，2，3，4，5，6 #
 * @type {RegExp}
 */
const _h1 = /(?:^|\n)#\s(.+)(?:\n|$)/gi;
const _h2 = /(?:^|\n)#{2}\s(.+)(?:\n|$)/gi;
const _h3 = /(?:^|\n)#{3}\s(.+)(?:\n|$)/gi;
const _h4 = /(?:^|\n)#{4}\s(.+)(?:\n|$)/gi;
const _h5 = /(?:^|\n)#{5}\s(.+)(?:\n|$)/gi;
const _h6 = /(?:^|\n)#{6}\s(.+)(?:\n|$)/gi;

/**
 * 匹配引用 >
 *
 * @type {RegExp}
 */
const _quote = /(?:^|\n)>\s(.+)(?:\n|$)/gi;

/**
 * 匹配分割线 ***
 *
 * @type {RegExp}
 */
const _hr = /(?:^|\n)(?:\*{3})(?:\n|$)/gi;

/**
 * 匹配无序列表 + * -
 *
 * @type {RegExp}
 */
const _ul = /(?:\n|^)((?:\*|\-|\+).+(?:(?:\n)(?:\s*(?:\*|\-|\+).+)*)*)(?:\n|$)/gi;


export default {
  _h1,
  _h2,
  _h3,
  _h4,
  _h5,
  _h6,
  _quote,
  _hr,
  _ul
}
