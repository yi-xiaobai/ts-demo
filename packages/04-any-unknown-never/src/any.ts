//* any 可以拥有任意类型的值
let anyVar: any = "yyds";

//* 布尔类型
anyVar = true;
//* 数字类型
anyVar = 9999;
//* 对象类型
anyVar = {};
//* 函数类型
anyVar = () => {};

//* string类型变量可以接受 any类型
const var1: string = anyVar;
const var2: number = anyVar;
const var3: boolean = anyVar;
