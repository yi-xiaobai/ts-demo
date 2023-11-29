type Result22 = Object extends any ? 1 : 2; //* 1
type Result23 = Object extends unknown ? 1 : 2; //* 1
type Result24 = any extends Object ? 1 : 2; // * 1 | 2
type Result25 = unknown extends Object ? 1 : 2; // * 2

//* any extends 包含了让条件成立的一部分 包含了让条件不成立的一部分
type Result26 = any extends "yyll" ? 1 : 2; //* 1 | 2
type Result27 = any extends string ? 1 : 2; //* 1 | 2
type Result28 = any extends {} ? 1 : 2; //* 1 | 2
type Result29 = any extends never ? 1 : 2; //* 1 | 2

//* 因为 "aaa" | {}  不是同一类型的字面量 顾条件不成立
type Result30 = "aaa" | {} extends string ? 1 : 2; //* 2

//* any可是是任何类型 unknown只能是any、unknown类型
type Result31 = any extends unknown ? 1 : 2; //* 1
type Result32 = unknown extends any ? 1 : 2; //* 1

//* Object < any/unknown
