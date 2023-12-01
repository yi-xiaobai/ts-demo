//* 分布式条件类型（Distributive Conditional Type），也称条件类型的分布式特性，
//* 只不过是条件类型在满足一定情况下会执行的逻辑而已

type Condition<T> = T extends 1 | 2 | 3 ? T : never;

//* 1 | 2 | 3
type Res29 = Condition<1 | 2 | 3 | 4>;
//* never
type Res30 = 1 | 2 | 3 | 4 | 5 extends 1 | 2 ? 1 | 2 | 3 | 4 | 5 : never;

//* 泛型参数传入
type Naked<T> = T extends boolean ? "Y" : "N";
type Wrapped<T> = [T] extends [boolean] ? "Y" : "N";

//* "N" | "Y"
type Res31 = Naked<number | boolean>;
//* "N"
type Res32 = Wrapped<number | boolean>;

//* 传入参数是一个联合类型 其次通过泛型参数传入 条件类型中的泛型参数不能被包裹

//* 即将这个联合类型拆开来，每个分支分别进行一次条件类型判断，再将最后的结果合并起来

//* 直接进行类型判断
type CompareUnion<T, U> = [T] extends [U] ? true : false;
//* true
type Res33 = CompareUnion<1 | 2, 1 | 2 | 3 | 4>;
//* false
type Res34 = CompareUnion<1 | 2, 1>;

//* 进行never判断
type IsNever<T> = [T] extends [never] ? true : false;
//* true
type Res35 = IsNever<never>;
//* false
type Res36 = IsNever<"aa">;
