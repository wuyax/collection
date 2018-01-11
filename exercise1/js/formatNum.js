/**
 * 格式化数字
 * @memberof util
 * @author 彭庆凯 <pqk@jusfoun.com>
 * @param {Number} num 需要格式化的数字
 * @param {String} fromat
 * @return {string} 返回格式化以后的字符串
 * @example let num = JFE.util.formatNum(123455.66,'zh-Hans-CN-u-nu-hanidec') // 一二三,四五五.六六
 */
function formatNum(num, fromat) {
  let f = fromat || 'en-US'
  return num.toLocaleString(f)
}
export {formatNum}
