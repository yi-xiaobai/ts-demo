//* 针对函数进行条件类型判断
type func = (...args: any[]) => any;

//* T extends func 泛型限制 也是条件限制 T必须满足这个条件
//* T extends (...args: any[]) => string 条件类型用类型参数判断 相当于if else
type FunctionConditionType<T extends func> = T extends (
  ...args: any[]
) => string
  ? "A string return func!"
  : "A non-string return func!";

//* A string return func!
type Res6 = FunctionConditionType<() => string>;

//* A non-string return func!
type Res7 = FunctionConditionType<() => number>;

//* A string return func!
type Res8 = FunctionConditionType<() => "yyll">;
