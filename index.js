/**
 * main
 *
 * Created by jufei on 2017/6/11.
 */


import Reg from './Reg';


function toHTML(value) {
  console.log(Reg._h1.exec(value));
  // 验证value是否为String类型，如果不是抛出异常
  if (Object.prototype.toString.call(value) !== '[object String]') {
    throw 'toHTML arguments[0] must be string'
  }

  // 验证value是否为空
  if (Reg._empty.test(value)) {
    throw 'argument[0] is empty'
  }

  value = value
      .replace(Reg._h1, '\n<h1>$1</h1>\n')
      .replace(Reg._h2, '\n<h2>$1</h2>\n')
      .replace(Reg._h3, '\n<h3>$1</h3>\n')
      .replace(Reg._h4, '\n<h4>$1</h4>\n')
      .replace(Reg._h5, '\n<h5>$1</h5>\n')
      .replace(Reg._h6, '\n<h6>$1</h6>\n')
      .replace(Reg._hr, '\n<hr/>\n')
      .replace(Reg._italic, '<i>$1</i>');


  return value;
}


export default {
  toHTML
}