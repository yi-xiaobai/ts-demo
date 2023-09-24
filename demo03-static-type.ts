//* 静态类型分为
//* 基础静态类型  对象类型

// 基础静态类型
const count: number = 1;

// 对象类型
const person: {
  name: string;
  age: number;
} = {
  name: "yyds",
  age: 18,
};

// 数组类型
const arr: String[] = ["1", "2", "3"];

// 类类型
class Person {}
const p: Person = new Person();

// 函数类型
const fun: () => string = () => {
  return "函数";
};
