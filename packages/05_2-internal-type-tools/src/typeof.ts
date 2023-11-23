const str = "yyll";

const obj = {
  name: "yyds",
};

const nullVar = null;
const undefinedVar = undefined;

const fn = (name: string) => {
  return name.length > 10;
};

type Str = typeof str; //* "yyll"
type Obj = typeof obj; //* {name:"yyds"}
type NullVar = typeof nullVar; //* null
type UndefinedVar = typeof undefinedVar; //* undefined
type Fn = typeof fn; //* (name: string) => boolean

//* 可以在工具类型中使用typeof
const fn1: typeof fn = (name: string) => {
  return name.length < 10;
};

//* ReturnType返回函数中的返回值类型
type FunReturnType = ReturnType<Fn>; //* boolean
