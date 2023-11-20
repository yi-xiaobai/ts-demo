//* never会被忽略
//* never：不携带任何的类型信息 顾在联合类型中直接被移除 最底层的类型
type UnionWithNever = "yyll" | 20 | void | never;

declare const strOrNumOrBool: string | number | boolean;

if (typeof strOrNumOrBool === "string") {
  console.log(strOrNumOrBool);
} else if (typeof strOrNumOrBool === "number") {
  console.log(strOrNumOrBool);
} else if (typeof strOrNumOrBool === "boolean") {
  console.log(strOrNumOrBool);
} else {
  let ans: never = strOrNumOrBool;
  console.log("unknown type : ", ans);
}
