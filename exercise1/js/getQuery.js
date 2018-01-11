/**
 * 将URL里的查询参数转换成对象的形式
 * @memberof util
 * @author 彭庆凯 <pqk@jusfoun.com>
 * @param null
 * @return {Object} 返回一个对象
 * @example let arr = JFE.util.getQuery()   // {type: 'atype',value: '234'}
 */
function getQuery() {
  let querystr = window.location.href.split("?")
  let GET = {};
  if (querystr[1]) {
    let GETs = querystr[1].split("&");
    for (let i = 0; i < GETs.length; i++) {
      let tmp_arr = GETs[i].split("=")
      let key = tmp_arr[0]
      GET[key] = tmp_arr[1]
    }
  }
  return GET;
}
export {getQuery}
