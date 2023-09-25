//* 泛型约束 、泛型类

// 定义一个接口
interface LengthWise {
  length: number;
}

//* T extends LengthWise
//* T继承了 接口LengthWise 必须实现其中的length属性 顾 args.length是存在的
function logging<T extends LengthWise>(args: T): T {
  console.log("==>Get 长度", args.length);
  return args;
}
console.log(logging({ username: "11", length: 19 }));
console.log(logging([1, 2, 3]));
