//* 类型断言
let unknownVar1: unknown;

(unknownVar1 as { foo: () => {} }).foo();

function foo(union: string | number) {
  if ((union as string).includes("yyds")) {
  }

  if ((union as number).toFixed(2) === "599") {
  }
}

//* 在 TypeScript 类型分析不正确或不符合预期时，将其断言为此处的正确类型

interface IFoo {
  name: string;
}

declare const obj: {
  fooone: IFoo;
};

const { fooone = {} as IFoo } = obj;
