//* 约束和默认值
type DefaultFactory<T = boolean> = string | number | T;

//* 默认值是boolean
const foo: DefaultFactory = true;

type ResStatus<T extends number> = T extends 10000 | 10001 | 10002
  ? "success"
  : "fail";

type Success = ResStatus<10000>;

type Fail = ResStatus<20000>;

// type Fail1 = ResStatus<"1111">;
