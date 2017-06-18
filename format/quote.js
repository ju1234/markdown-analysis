/**
 * Created by jufei on 2017/6/18.
 */

const _quote = /^>\s+(.+)$/;

export default function quote(value) {
  return value.replace(_quote,'<p class="ju-markdown-quote">$1</p>')
}