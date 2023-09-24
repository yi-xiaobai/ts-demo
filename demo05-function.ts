//* 函数参数和返回值定义

// 有返回值定义
function getTotal(num1: number, num2: number): number {
  return num1 + num2;
}

// 无返回值定义
function getCount(str: string): void {
  console.log("==>Get str", str);
}

// 自定义静态类型
interface One {
  one: number;
  two: number;
}
// 函数参数是多个对象时
function getNumber({ one, two }: One): number {
  return one + two;
}

// 函数参数是一个对象时
function add({ one }: { one: number }): number {
  return one + 10;
}
