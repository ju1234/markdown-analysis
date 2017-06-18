/**
 * Created by jufei on 2017/6/18.
 */


const _img = /!\[(.*)\](\w+)/g;

export default function image(value) {
  return value.replace(_img,'<img src="$2" alt="$1" title="$1">')
}
