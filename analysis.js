/**
 * Created by jufei on 2017/6/8.
 */


var h1Reg = /#\s+(.+)\n|\n#\s+(.+)$|#\s+(.+)/gi;

function markDownAnalysis(value) {
  var h1Text = h1Reg.exec(value);
  console.log(h1Text)
  // return `a${{h1Text[0]}}`
  return `<h1>${h1Text[3]}</h1>`
}

export default markDownAnalysis;