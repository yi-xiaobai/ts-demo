//* 类型别名

// 函数类型
type Handle = () => void;

const handle1: Handle = () => {};
const handle2: Handle = () => {};

// 联合类型 满足其一即可（或的关系）
type PossibleTypes = string | number | boolean;

//* 字面量类型
//* 字面量联合类型相比它们对应的原始类型，能够提供更精确的类型信息与类型提示
type Status = "success" | "fail";
// const status: Status = "";

interface UserBasicInfo {}

interface UserJobInfo {}

interface UserFamilyInfo {}

// 交叉类型 需要实现上述三个接口的属性 才能被认为是UserInfo类型
type UserInfo = UserBasicInfo & UserJobInfo & UserFamilyInfo;
