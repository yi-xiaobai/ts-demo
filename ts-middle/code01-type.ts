//* js中null：有值 但是为空
//* js中undefined：无值

//? ts中null：有具体意义的类型
//? ts中undefined：有具体意义的类型

const tmp1: null = null;
const tmp2: undefined = undefined;

//! strictNullChecks = false 才可以使用
const tmp3: string = null;
const tmp4: string = undefined;

const voidVar1: void = null;
const voidVar2: void = undefined;

//* 数组的类型标注

//* 定义数组
const arr1: string[] = [];
const arr2: Array<string> = [];

//* 元组
//* 规定了每个元素的类型
const arr3: [string, boolean, number] = ["1", true, 99];
console.log(arr3[0]);
// console.log(arr3[3]); //* 超出了数组的索引 直接报错

//* 还有可选操作
//* 两种定义方式都可以
const arr4: [string, boolean?, number?] = ["66"];
const arr5: [string, boolean?, number?] = ["66", ,];

//* 具名元组
const arr6: [name: string, age: number, male: boolean] = ["yyds", 19, true];
//* 同样也有可选操作
const arr7: [name: string, age: number, male?: boolean] = ["yyds", 19];

//* 隐试的越界访问
const arr8: string[] = [];
//! 此处没有报错 隐藏的越界访问
const [ele1, ele2, ...rest] = arr8;

const arr9: [string, number, boolean] = ["1", 1, true];
//* 此处如果越界了 会直接提示报错
const [name1, age, male] = arr9;

//* 对象
interface IDescription {
  name: string;
  age: number;
  male: boolean;
  func: Function;
}

const obj: IDescription = {
  name: "llyy",
  age: 20,
  male: true,
  func: function () {
    console.log(11);
  },
};

//* 对象还有可选和只读操作
interface IDescription1 {
  //* 只读属性
  readonly name: string;
  age: number;
  //* 可选属性
  male?: boolean;
}

const obj1: IDescription1 = {
  name: "haha",
  age: 18,
  male: false,
};
//* 不可修改name属性
// obj1.name = '11'

//* 装箱类型和拆箱类型
//* 装箱类型：Object、String、Number 等等
//* 拆箱类型：object、string、number 等等

//* object 代表所有非原始对象的类型即数组、对象、函数类型
// const tmp5:object = 1 //* Type 'number' is not assignable to type 'object'.
const tmp5: object = { name: 11 };
const tmp6: object = [1, 2, 3, "2"];
const tmp7: object = () => {};
