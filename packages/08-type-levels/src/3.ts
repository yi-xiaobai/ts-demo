type Result11 = "11" | "22" | "33" extends string ? 1 : 2; //* 1
type Result12 = 1 | 2 | 3 extends number ? 1 : 2; //* 1
type Result13 = "yyll" extends "yyll" | "600"
  ? "yyll" | "600" extends string
    ? 2
    : 1
  : 0; //* 2

//* 同一类型的字面量联合类型 < 此基础类型
