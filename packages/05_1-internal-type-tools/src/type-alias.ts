//* 类型别名

type A = string;
type statusCode = 200 | 300 | 400;

//* 定义statu变量 类型为 statusCode
const statu: statusCode = 300;

//* 描述一个函数类型
type Handler = (e: Event) => void;
const clickHandler: Handler = (e) => {};
const moveHandler: Handler = (e) => {};
const dragHandler: Handler = (e) => {};

//* 将类型别名当作工具类型
type Factory<T> = T | number | string;

//* 新类型出现
type FactoryWithBoolean = Factory<boolean>;
//* 现在的FactoryWithBoolean 是 string | number | boolean 三种类型 也是联合类型 符合其中之一即可
const fooBool: FactoryWithBoolean = true;

//* 可以定义一个返回null的联合类型
type MayBeNull<K> = K | null;
function process(input: MayBeNull<{ handler: () => {} }>) {
  input?.handler();
}

//*

//* T变量或者T类型的数组
type MaybeArray<T> = T | T[];

//* 返回一个T类型的数组
function ensureArray<T>(input: MaybeArray<T>): T[] {
  return Array.isArray(input) ? input : [input];
}
