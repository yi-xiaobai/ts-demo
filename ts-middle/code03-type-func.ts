//! 函数中的类型

//* 函数的类型签名：描述函数的入参类型和返回值类型
type FuncFoo = (name: string) => string;
const foo: FuncFoo = (name: string) => {
  return name;
};

//* void类型：没有return关键字的函数
function foo1() {}
function foo2(): void {
  return;
}

//* 此函数进行了返回操作 但是没有返回实际的值 undefined
function foo3(): undefined {
  return;
}

//* 可选参数和rest参数
function foo4(name: string, age?: number) {
  //! 可选参数不能跟在必选参数前面！！
  console.log(name);
}

function foo5(arg1: string, ...args: any[]) {} //! reset参数必须是参数列表中最后一个

//* 利用元组进行标注
//* [string,number] 第一个参数类型是string 第二个是number
function foo6(arg1: string, ...args: [string, number]) {}
foo6("对的", "haha", 1);

//* 函数重载
function foo7(foo: number, bar: true): string;
function foo7(foo: number, bar?: false): number;
function foo7(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 100;
  }
}
foo7(599);
foo7(600, true);
foo7(599, false);
