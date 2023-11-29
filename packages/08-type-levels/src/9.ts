type Result37 = 1 | 2 | 3 extends 1 | 2 | 3 | 4 ? 1 : 2; //* 1
type Reuslt38 = 1 | 2 extends 1 ? 1 : 2; //* 2

//* 联合类型的所有的成员是否能在另一个联合类型中找到
