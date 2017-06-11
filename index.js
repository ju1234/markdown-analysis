/**
 * main
 *
 * Created by jufei on 2017/6/11.
 */


import Reg from './Reg';
import './style/index.less';


function toHTML(value) {
  // 验证value是否为String类型，如果不是抛出异常
  if (Object.prototype.toString.call(value) !== '[object String]') {
    throw 'toHTML arguments[0] must be string'
  }

  // 验证value是否为空
  if (Reg._empty.test(value)) {
    throw 'argument[0] is empty'
  }

  value = value
  // 删除script标签，加强网页安全性
      .replace(Reg._script, '')
      // 转换h1标签
      .replace(Reg._h1, '\n<h1 class="ju-markdown-h1">$1</h1>\n')
      // 转换h2标签
      .replace(Reg._h2, '\n<h2 class="ju-markdown-h2">$1</h2>\n')
      // 转换h3标签
      .replace(Reg._h3, '\n<h3 class="ju-markdown-h3">$1</h3>\n')
      // 转换h4标签
      .replace(Reg._h4, '\n<h4 class="ju-markdown-h4">$1</h4>\n')
      // 转换h5标签
      .replace(Reg._h5, '\n<h5 class="ju-markdown-h5">$1</h5>\n')
      // 转换h6标签
      .replace(Reg._h6, '\n<h6 class="ju-markdown-h6">$1</h6>\n')
      // 转换分割线为hr标签
      .replace(Reg._hr, '\n<hr class="ju-markdown-hr"/>\n')
      // 粗体
      .replace(Reg._bold, '<b>$1</b>')
      // 斜体
      .replace(Reg._italic, '<i>$1</i>')
      // 标记
      .replace(Reg._mark, '<span class="ju-markdown-mark">$1</span>');
  // 无序列表


  value = Reg._ul.test(value) ? toUl(value) : value;
  value = Reg._ol.test(value) ? toOl(value) : value;


  // console.log(value)

  // console.log(value);

  return value;
}




function toUl(value) {

  value = value.replace(Reg._ul,function ($1) {
    let result = '';
    $1.split(/\n(?! )/g).map(item => {
      result += `<li>\n${item}\n</li>`
    });
    return '\n<ul>' + result.replace(/\n[\-+*] /g,'').replace(/ ([\-+*])| (\d\.)/g,'$1$2') + '</ul>'
  });
  console.log(value)
  value =  Reg._ul.test(value) ? toUl(value) : value;
  value =  Reg._ol.test(value) ? toOl(value) : value;
  // value = value.split(/\n\* |\n(?=<\/ul>)/)
  //     .replace(Reg._li,'<li>$1</li>')


  value =  value.replace(/<li>\s*<\/li>/g,'');

  return value;
}


function toOl(value) {
  console.log('convert ol')
  value = value.replace(Reg._ol,function ($1) {
    console.log($1,'$1')
    let result = '';
    $1.split(/\n(?! )/g).map(item => {
      result += `<li>\n${item}\n</li>`
    });
    console.log($1,'want')
    return '\n<ol>' + result.replace(/\n\d\. /g,'').replace(/ ([\-+*])| (\d\.)/g,'$1$2') + '</ol>'
  });

  console.log(value);
  value = value.replace(/ ([\-+*])/g,'$1');
  console.log(/ [\-+*]/.test(value),'asfasgfjasoghjadis')
  value =  Reg._ol.test(value) ? toOl(value) : value;
  value =  Reg._ul.test(value) ? toUl(value) : value;
  // value = value.split(/\n\* |\n(?=<\/ul>)/)
  //     .replace(Reg._li,'<li>$1</li>')


  value =  value.replace(/<li>\s*<\/li>/g,'')

  return value;
}


export default {
  toHTML
}

