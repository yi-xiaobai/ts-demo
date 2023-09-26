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
  (num1: T, num2: T): T;
}
function identify119<V>(arg: V): V {
  return arg;
}

function add<U>(num1: U, num2: U): U {
  return `${num1}${num2}`;
}
