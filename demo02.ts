const count: number = 1;

// 自定义静态类型
interface Person {
  name: string;
  age: number;
}

let str: Person = {
  name: "yyds",
  age: 20,
};
console.log("==>Get str", str);
