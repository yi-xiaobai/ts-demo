//* 类型层级：明确各种类型的兼容关系

type Result1 = "ll" extends string ? "1" : "2"; //* "1"
type Result2 = 1 extends number ? 1 : 2; //* 1
type Result3 = true extends boolean ? 1 : 2; //* 1
type Result4 = { name: string } extends object ? 1 : 2; //* 1
type Result5 = { name: "yyll" } extends object ? 1 : 2; //* 1
type Result6 = [] extends object ? 1 : 2; //* 1

//* 字面量类型 < 对应的原始类型
