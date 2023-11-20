//* 字面量类型和枚举类型

//* 对象类型
interface Res {
  code: number;
  status: string;
  data: any;
}

//* 字面量类型
interface ResStr {
  code: 10000 | 10001 | 10002;
  status: "success" | "fail";
  data: any;
}

declare var res: ResStr;
res = {
  code: 10000,
  status: "success",
  data: true,
};
if (res.status === "success") {
  console.log(res);
}

//* 字符串字面量类型
const str1: "didi" = "didi";
//* 数字字面量类型
const numStr: 999 = 999;
//* 布尔字面量类型
const flagStr: true = true;

//* 联合类型：一组类型的可用集合
interface Tmp {
  user: { vip: true; expires: string } | { vip: false; promotion: string };
}

declare var user: Tmp;
// user = {
//   user: {
//     vip: true,
//     expires: "dd",
//   },
// };
// if (user.user.vip) {
//   console.log(user.user.expires);
// }

//* 类型别名来实现联合类型
type Code = "10000" | "10001" | "10002";
type Status = "success" | "fail";
type And = `${Code}-${Status}`;

//* 对象字面量类型
interface Tmp1 {
  obj: {
    name: "didi";
    age: 30;
  };
}
//? 太固定化了
const objTmp1: Tmp1 = {
  obj: {
    name: "didi",
    age: 30,
  },
};

//* 枚举类型
enum PageUrl {
  Home_Page_Url = "url1",
  Setting_Page_Url = "url2",
  Share_Page_Url = "url3",
}

//* 默认从0开始
enum Item {
  Foo,
  Bar,
  Baz,
}
console.log(Item.Foo); //* 0
console.log(Item.Bar); //* 1
console.log(Item.Baz); //* 2

enum Item1 {
  Foo,
  Bar = 599,
  Baz,
}
console.log(Item1.Foo); //* 0
console.log(Item1.Bar); //* 599
console.log(Item1.Baz); //* 600

//* 延迟求值
//! 没有使用延迟求值的枚举成员必须放在使用常量枚举值声明的成员之后或者放在第一位
const returnNum = () => 100 + 499;
enum Item2 {
  Foo = returnNum(),
  Bar = 600,
  Baz,
}
console.log(Item2.Foo); //* 599
console.log(Item2.Bar); //* 600
console.log(Item2.Baz); //* 601
console.log(Item2[599]); //* Foo    进行双向枚举
console.log(Item2[600]); //* Bar
console.log(Item2[601]); //* Baz

//* 仅值为数字的枚举成员能进行双向枚举 字符串的仍然不行
enum Item3 {
  Foo,
  Bar = "haha",
  Baz = "wuwu",
}
console.log(Item3.Bar); //* haha

//* 常量枚举
const enum Item5 {
  Foo,
  Bar,
  Baz,
}

const fooValue = Item5.Foo;

//* 针对于 let  const
//* let：该值从属的类型
//* const：声明的原始类型变量将不可改变
