/**
 * 绘制和背景图片一致的图片，使两者完美融合
 * @memberof util
 * @author 彭庆凯 <pqk@jusfoun.com>
 * @param parId 父元素容器ID
 * @param canID canvas容器ID
 * @return undefined
 */
function fullFill(parId, canID) {

  // 父元素DOM
  let parDom = document.getElementById(parId)
  let canvas = document.getElementById(canID)
  var ctx = canvas.getContext('2d')
  // 设置父元素的背景图片的样式
  parDom.style.backgroundSize = 'cover'
  // 得到父元素的CSS参数 兼容处理
  if (window.getComputedStyle) {
    var parDomW = parseFloat(window.getComputedStyle(parDom, null).width)
    var parDomH = parseFloat(window.getComputedStyle(parDom, null).height)
    var bgUrl = window.getComputedStyle(parDom, null).backgroundImage
    var canDomW = parseFloat(window.getComputedStyle(canvas, null).width)
    var canDomH = parseFloat(window.getComputedStyle(canvas, null).height)
  } else {
    var parDomW = parDom.currentStyle.width
    var canDomW = canvas.currentStyle.width
    var parDomH = parDom.currentStyle.height
    var canDomH = canvas.currentStyle.height
    var bgUrl = parDom.currentStyle.backgroundImage
  }

  // 参考系 以视口为参考
  // 父元素距离屏幕的距离
  var x1 = parDom.getBoundingClientRect().left
  var y1 = parDom.getBoundingClientRect().top

  //  canvas距离视口的距离
  var x2 = canvas.getBoundingClientRect().left
  var y2 = canvas.getBoundingClientRect().top

  let img = new Image()
  // 获取父元素的背景图片
  img.src = bgUrl.match(/\"(.*)\"/)[1]
  // 获取图片的宽高度
  var nWidth = 0
  var nHeight = 0
  // 图片加载完成以后执行绘制
  img.onload = function () {
    // 获取图片的真实宽高
    nWidth = img.naturalWidth
    nHeight = img.naturalHeight

    // 缩放比例
    var scale = 1;
    // 横行拉伸或者纵向拉伸的标志 1为纵向，2为横向
    var flag = 1
    // 因子 本质上就是超出屏幕的部分
    var factor = 0

    if (parDomH / parDomW > nHeight / nWidth) {
      // 说明 高度变高或者宽度变窄了，这时候以高度为准了
      scale = parDomH / nHeight;
      factor = (nWidth * scale - parDomW) / 2 / scale
      flag = 1
    } else {
      scale = parDomW / nWidth;
      factor = (nHeight * scale - parDomH) / 2 / scale
      flag = 2
    }

    if (flag === 1) {
      ctx.drawImage(img, (x2 - x1) / scale + factor, ((y2 - y1) / scale), canDomW / scale, canDomH / scale, 0, 0, canDomW, canDomH);
    } else
    if (flag === 2) {
      ctx.drawImage(img, (x2 - x1) / scale, ((y2 - y1) / scale + factor), canDomW / scale, canDomH / scale, 0, 0, canDomW, canDomH);
    }
  }
}
export {fullFill}
