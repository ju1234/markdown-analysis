/**
 * Created by jufei on 2017/6/18.
 */

import getInlineType from '../getInlineType';


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
  if(_h1.test(value)) return value.replace(_h1,'<h1>$1</h1>');
  if(_h2.test(value)) return value.replace(_h2,'<h2>$1</h2>');
  if(_h3.test(value)) return value.replace(_h3,'<h3>$1</h3>');
  if(_h4.test(value)) return value.replace(_h4,'<h4>$1</h4>');
  if(_h5.test(value)) return value.replace(_h5,'<h5>$1</h5>');
  if(_h6.test(value)) return value.replace(_h6,'<h6>$1</h6>');
}


export default title;