/**
 * Created by jufei on 2017/6/18.
 */




export default function code(codeChuns) {
  const length = codeChuns.length;
  if(codeChuns[length - 1] !== undefined){
    codeChuns.pop();
  }

  let codeName = codeChuns.shift().replace(/`{3}\s*(.*)/,'$1');
  console.log(codeName)
  return `<div ref="${codeName}" class="ju-markdown-code"><pre>${codeChuns.join('\n')}</pre></div>`
}