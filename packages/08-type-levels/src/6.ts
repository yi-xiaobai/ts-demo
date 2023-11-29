type Result33 = never extends "yyll" ? 1 : 2;

//* void undefined null 都是切实存在的类型 和 string number 没什么区别
type Result34 = void extends "yyll" ? 1 : 2; //* 2
type Result35 = undefined extends "yyll" ? 1 : 2; //* 2
type Result36 = null extends "yyll" ? 1 : 2; //* 2

//* never < 字面量类型
