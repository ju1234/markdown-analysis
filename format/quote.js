/**
 * Created by jufei on 2017/6/18.
 */

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
}