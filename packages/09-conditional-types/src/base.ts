//* 并不需要类型完全相等 需要具有兼容性即可
type LiteralType<T> = T extends string ? "string" : "other";
type Res1 = LiteralType<"yyll">; //* string
type Res2 = LiteralType<number>; //* other

//* 三元表达式嵌套
type LiteralMoreType<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends null
  ? "null"
  : T extends undefined
  ? "undefined"
  : never;

type Res3 = LiteralMoreType<"yyll">; //* string
type Res4 = LiteralMoreType<999>; //* number
type Res5 = LiteralMoreType<{}>; //* never

//* 函数中 条件类型和泛型搭配一起使用
function universalAdd<T extends string | number | boolean>(x: T, y: T) {
  return x + (y as any);
}
universalAdd(699, 1); //* 此时T的类型就是 699 ｜ 1
universalAdd("llyy", "mwq"); //* 此时T的类型就是 llyy ｜ mwq

//* 由于两个参数都是用的泛型T 顾泛型会被填充为一个联合类型

function _universalAdd<T extends string | number | boolean>(
  x: T,
  y: T
): LiteralToPrimitive<T> {
  return x + (y as any);
}

//* 提取返回值的类型
type LiteralToPrimitive<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : never;

_universalAdd(699, 1); //* number
_universalAdd(true, false); //* boolean
_universalAdd("11", "22"); //* string
