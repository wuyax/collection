/**
 * 删除字符串中所有的空格
 * @memberof util
 * @author 彭庆凯 <pqk@jusfoun.com>
 * @param {String} str 需要处理的字符串
 * @param {String} new string
 * @example let s = JFE.util.trim(' da shang hai ')// dashanghai
 */
function trimAll(str) {
  return str.replace(/\s+/g, "")
}
export {trimAll}
