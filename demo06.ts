// 数组类型

//* 数字数组
const numberArr: number[] = [1, 2, 3];

//* 字符串类型
const stringArr: string[] = ["q", "w", "e"];

//* undefined类型
const undefinedArr: undefined[] = [undefined, undefined];

//* 混合类型  数字/字符串/布尔都有
const mixedArr: (string | number | boolean)[] = ["1", 2, false];

//* 数组对象类型  定义方式一
const params: { name: string; age: number }[] = [
  { name: "张三", age: 20 },
  { name: "李四", age: 18 },
];

//* 数组对象类型  定义方式二
type lady = { name: string; age: number };
const params1: lady[] = [
  { name: "张三", age: 20 },
  { name: "李四", age: 18 },
];

//* 数组对象类型  定义方式三
class Person {
  name: string;
  age: number;
}
const params2: Person[] = [
  { name: "张三", age: 20 },
  { name: "李四", age: 18 },
];
