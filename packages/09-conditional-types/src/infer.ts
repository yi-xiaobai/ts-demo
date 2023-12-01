type Func = (...args: any[]) => any;

//* 首先 T必须满足是一个函数 即Func类型  也是泛型限制
//* 再者 条件类型判断 infer R 推断返回值类型
//* 满足条件 返回 返回值类型即R 的类型 否则就是T的类型
type _FunctionConditionType<T extends Func> = T extends () => infer R ? R : T;
type Res9 = _FunctionConditionType<() => string>; //* string
type Res10 = _FunctionConditionType<() => number>; //* number
type Res11 = _FunctionConditionType<() => String>; //* String
type Res12 = _FunctionConditionType<() => any>; //* any
type Res13 = _FunctionConditionType<() => 1>; //* 1

//* infer 只能在条件类型中使用
type Swap<T extends any[]> = T extends [infer A, infer B] ? [B, A] : T;
type Res14 = Swap<[1, 2]>; //* 符合元组结构 元素进行交换
type Res15 = Swap<[1, 2, 3]>; //* 不符合结构 仍是[1,2,3]

//* 提取首尾两个
type ExtractStartAndEnd<T extends any[]> = T extends [
  infer start,
  ...any[],
  infer end
]
  ? [start, end]
  : T;
type Res16 = ExtractStartAndEnd<[1, 2, 3]>; //* [1,3]

// 调换首尾两个
type SwapStartAndEnd<T extends any[]> = T extends [
  infer start,
  ...infer left,
  infer end
]
  ? [end, ...left, start]
  : T;
type Res17 = SwapStartAndEnd<[1, 2, 3, 4]>; //* [4,2,3,1]

// 调换开头两个
type SwapFirstTwo<T extends any[]> = T extends [
  infer start1,
  infer start2,
  ...infer more
]
  ? [start2, start1, ...more]
  : T;
type Res18 = SwapFirstTwo<[1, 2, 3]>; //* [2,1,3]

//* 数组
type ArrayItemType<T> = T extends Array<infer ElementType>
  ? ElementType
  : never;
type Res19 = ArrayItemType<[]>; //* never
type Res20 = ArrayItemType<string[]>; //* string
type Res21 = ArrayItemType<[string, number]>; //* string | number

//* 接口
type PropType<T, K extends keyof T> = T extends { [Key in K]: infer R }
  ? R
  : never;

//* string
type Res22 = PropType<{ name: string }, "name">;
//* string | number
type Res23 = PropType<{ name: string; age: number }, "name" | "age">;
