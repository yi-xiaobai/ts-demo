//* 泛型接口

/**
 * 定义接口
 */
interface GenericsIdenitfy {
  <T>(arg: T): T;
}

/**
 * 定义函数
 * @param arg
 * @returns
 */
function identify19<V>(arg: V): V {
  return arg;
}

let myIdentify19: GenericsIdenitfy = identify19;

interface GenericsIdenitfy1<T> {
  (arg: T): T;
}
function identify119<V>(arg: V): V {
  return arg;
}
let myIdentify119: GenericsIdenitfy1<string> = identify119;
console.log("==>Get 接口泛型", myIdentify119("123456")); //* ==>Get 接口泛型 123456
