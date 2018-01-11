/**
 * 合并两个对象类似于jQuery的extend
 * @memberof util
 * @author 彭庆凯 <pqk@jusfoun.com>
 * @param {Boolean} deep 是否深度合并
 * @param {Object} target 原对象，合并完成和这个对象会被修改
 * @param {Object} options 需要和原对象合并的对象，不会被修改
 * @return {Object} 返回扩展后的对象
 * @param JFE.util.extend(true, {
 * a: 'aa',
 * b: {
 *    c: 'cc',
 *    d: 'dd'
 *  }
 *},{
 *  e: 'ee',
 *  f: 'ff',
 *  a: 'zz',
 *  b: {
 *    c: 'yy',
 *    g: 'gg'
 *  }
 *})
 * // {
 * a: 'zz',
 * b: {
 *    c: 'yy',
 *    d: 'dd',
 *    g: 'gg'
 *  },
 *  e: 'ee',
 *  f: 'ff',
 * }
 */

const extend = function() {
  let copyIsArray,
    toString = Object.prototype.toString,
    hasOwn = Object.prototype.hasOwnProperty,

    class2type = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Object]': 'object'
    },

    type = function(obj) {
      return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
    },

    isWindow = function(obj) {
      return obj && typeof obj === "object" && "setInterval" in obj;
    },

    isArray = Array.isArray || function(obj) {
      return type(obj) === "array";
    },

    isPlainObject = function(obj) {
      if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
        return false;
      }

      if (obj.constructor && !hasOwn.call(obj, "constructor") &&
        !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
      }

      let key;
      for (key in obj) {}

      return key === undefined || hasOwn.call(obj, key);
    };

  return function extend(deep, target, options) {
    for (let name in options) {
      let src = target[name];
      let copy = options[name];

      if (target === copy) {
        continue;
      }

      if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
        let clone = {};
        if (copyIsArray) {
          copyIsArray = false;
          clone = src && isArray(src) ? src : [];
        } else {
          clone = src && isPlainObject(src) ? src : {};
        }
        target[name] = extend(deep, clone, copy);
      } else if (copy !== undefined) {
        target[name] = copy;
      }
    }
    return target;
  };
}();
export {extend}
