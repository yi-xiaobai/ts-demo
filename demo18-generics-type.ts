//* 泛型类型
function identify18<T>(arg: T): T {
  return arg;
}

let myIdentify18: <T>(arg: T) => T = identify18;

console.log(myIdentify18<string>("111")); //* 111

//* 可以使用不同的泛型参数名
let myIdentify188: <U>(arg: U) => U = identify18;
console.log(myIdentify188<boolean>(true)); //* true

//* 带有调用签名的对象字面量
let myIdentify1888: { <T>(arg: T): T } = identify18;
console.log(myIdentify1888<number>(1314)); //* 1314
