//* 双重断言
//* 原类型与断言类型之间差异过大

const str: string = "111";
// (str as { handler: () => {} }).handler();

//* 差异太大 需要先到一个通用的类
(str as unknown as { handler: () => {} }).handler();
