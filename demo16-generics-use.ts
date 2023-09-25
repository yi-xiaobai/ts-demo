//* 泛型使用

function identify(arg: number): number {
  return arg;
}
console.log("==>Get 泛型", identify(1314)); // ==>Get 泛型 1314

//* 为了适配其他类型也可以使用该函数 可以使用泛型 只表示类型不是值
function identify1<T>(arg: T): T {
  return arg;
}
console.log("==>Get string", identify1<string>("hello generics"));
console.log("==>Get boolean", identify1<boolean>(true));
console.log("==>Get number", identify1<number>(999));

//* 泛型数组的使用
function loggingIdentity<T>(arg: T[]): T[] {
  return arg;
}
console.log(loggingIdentity<string>(["1", "2", "3"])); //[ '1', '2', '3' ]

function loggingIdentity1<T>(arg: Array<T>): Array<T> {
  return arg;
}
console.log(loggingIdentity1<string>(["4", "5", "6"])); //[ '4', '5', '6' ]

//* 多个泛型定义
function add1<T, U>(one: T, two: U) {
  return `${one}${two}`;
}
console.log("==>Get 多个泛型定义:", add1<number, number>(1, 5)); //* ==>Get 多个泛型定义: 15
