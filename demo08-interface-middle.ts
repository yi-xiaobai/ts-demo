//* 使用接口表示函数类型
interface SearchFunc {
  //* 参数列表和返回值类型
  (source: string, subString: string): boolean;
}

//* 使用函数类型接口
let mySearch: SearchFunc = function (
  source: string,
  subString: string
): boolean {
  let result = source.search(subString);
  return result > -1;
};

//* 变量名称也可以不同
let mySearch1: SearchFunc = function (first: string, second: string): boolean {
  let result = first.search(second);
  return result > -1;
};

//* 索引类型
interface StringArray {
  //* 当用索引去接口 StringArray时 会返回string类型对应的值
  [index: number]: string;
}
let myArray: StringArray = ["1", "2", "3"];
console.log("==>Get 可索引类型", myArray[0]); //* ==>Get 可索引类型 1

//* 索引类型有两种：数字和字符串
//! 其中 数字类型的索引的返回值必须是字符串索引返回值类型的子类型
//? 原因：这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象
class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

interface Notokay {
  //* 此处必须是string索引返回值的子类型
  [index: number]: Dog;
  [index: string]: Animal;
}
