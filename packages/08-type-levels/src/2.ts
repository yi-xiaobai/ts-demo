type Result7 = 1 extends 1 | 2 | 3 ? 1 : 2; //* 1
type Result8 = "tt" extends "tt" | "lkkl" | "aa" ? 1 : 2; //* 1
type Result9 = true extends true | false ? 1 : 2; //* 1
type Result10 = string extends string | boolean | number ? 1 : 2; //* 1

//* 字面量类型 < 包含此类型的联合类型,原始类型 < 包含此原始类型的联合类型
