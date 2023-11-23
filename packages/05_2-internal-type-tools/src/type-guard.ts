//* 类型保护
function isString(input: unknown): boolean {
  return typeof input === "string";
}

function foo(input: string | number) {
  if (isString(input)) {
    //* Property 'replace' does not exist on type 'string | number'.
    //? 类型控制流分析能力不足 收集不到isString函数中的参数类型 需要通过is关键字来提供类型信息
    // input.replace("yyll", "llyy");
  }
}

//* 如果_isString函数返回true is关键字前 入参类型 会被类型守卫调用方后续的类型控制流分析收集到
function _isString(input: unknown): input is string {
  return typeof input === "string";
}

function _foo(input: string | number) {
  if (_isString(input)) {
    input.replace("yyll", "llyy");
  }
}

export type Falsy = false | "" | 0 | null | undefined;

export const isFalsy = (val: unknown): val is Falsy => !val;

export type Primitive = string | number | boolean | undefined;

export const isPrimitive = (val: unknown): val is Primitive =>
  ["string", "number", "boolean", "undefined"].includes(typeof val);
