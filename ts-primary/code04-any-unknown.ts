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

interface Iuser {
  name: string;
  job: Ijob;
}

interface Ijob {
  title: string;
}

const user4: Iuser = {
  name: "llyy",
  job: {
    title: "断言应用场景",
  },
};

// const { name, job = {} } = user4;
// const { title } = job; //* Property 'title' does not exist on type '{}'
//* 为 job 提供了一个空对象作为默认值 TypeScript 会认为此时 job 的类型就是一个空对象  顾读取不到title的值

const { name, job = {} as Ijob } = user4;
const { title } = job;
console.log("==>Get name", name); //* llyy
console.log("==>Get title", title); //* 断言应用场景

export {};
