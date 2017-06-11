/**
 * main
 *
 * Created by jufei on 2017/6/11.
 */


import Reg from './Reg';
import './style/index.css';


function toHTML(value) {
  // 验证value是否为String类型，如果不是抛出异常
  if (Object.prototype.toString.call(value) !== '[object String]') {
    throw 'toHTML arguments[0] must be string'
  }

  // 验证value是否为空
  if (Reg._empty.test(value)) {
    throw 'argument[0] is empty'
  }

  value =  value
      // 删除script标签，加强网页安全性
      .replace(Reg._script,'')
      // 转换h1标签
      .replace(Reg._h1, '\n<h1>$1</h1>\n')
      // 转换h2标签
      .replace(Reg._h2, '\n<h2>$1</h2>\n')
      // 转换h3标签
      .replace(Reg._h3, '\n<h3>$1</h3>\n')
      // 转换h4标签
      .replace(Reg._h4, '\n<h4>$1</h4>\n')
      // 转换h5标签
      .replace(Reg._h5, '\n<h5>$1</h5>\n')
      // 转换h6标签
      .replace(Reg._h6, '\n<h6>$1</h6>\n')
      // 转换分割线为hr标签
      .replace(Reg._hr, '\n<hr class="ju-markdown-hr"/>\n')
      // 粗体
      .replace(Reg._bold,'<b>$1</b>')
      // 斜体
      .replace(Reg._italic, '<i>$1</i>')
      // 标记
      .replace(Reg._mark,'<span class="ju-markdown-mark">$1</span>');

  console.log(value);

  return value;
}


export default {
  toHTML
}