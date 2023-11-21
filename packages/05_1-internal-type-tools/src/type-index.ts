/**
 * 索引类型：
 * 1.索引签名类型
 * 2.索引类型查询
 * 3.索引类型访问
 */

//* 索引签名类型：声明一个键值类型一致的类型结构 比如 接口 或者 类型别名
interface AllstringTypes {
  [key: string]: string;
}

type AllstringTypess = {
  [key: string]: string;
};

type PropType1 = AllstringTypes["yyll"]; //* string
type PropType2 = AllstringTypes["599"]; //* string

//* 索引签名类型可以和具体的签名类型共存 但是键值类型要保持一致
interface BoolOrStringTypes {
  //   propA: string; //! 此处键值类型必须保持一致
  [key: string]: number;
}

//* 索引类型查询：将对象中所有的键转为对应的字面量类型
interface Foo {
  yyll: 1;
  1314: 520;
}
type FooKeys = keyof Foo & {}; //* "yyll" | 1314
//* keyof的产物必定是一个联合类型

//* 索引类型访问：通过键的字面量类型访问值类型
interface Foo1 {
  propsA: number;
  propsB: string;
  propsC: boolean;
}
type FooNum = Foo1["propsA"]; //* number
type PropTypeUnion = Foo1[keyof Foo1]; //* string | number | boolean
