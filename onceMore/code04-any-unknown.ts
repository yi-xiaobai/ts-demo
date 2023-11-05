//* any unknow 都是万能类型 但是
//* any类型缺失了类型检查的保护
//* 类型断言：告诉编辑器确定了某个值的类型的方式 明确知道了这个变量类型是什么

function myFunc(params: unknown) {
  //   params.forEach((element) => {}); //* unknown类型有类型保护机制

  //* 类型断言
  //* 把unknown断言成数组类型
  (params as unknown[]).forEach((ele) => {
    ele = (ele as number) + 1;
  });
}

myFunc([1, 2, 3]);

// function myFunc1(params: any) {
//   //! any类型没有类型检查的提示
//   params.forEach((element) => {});
// }
