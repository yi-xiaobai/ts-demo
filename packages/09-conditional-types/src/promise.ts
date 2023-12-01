type PromiseValue<T> = T extends Promise<infer R> ? R : T;
type Res24 = PromiseValue<Promise<number>>; //* number
type Res25 = PromiseValue<string>; //* string

//* Promise<boolean>
type Res26 = PromiseValue<Promise<Promise<boolean>>>;

//* 嵌套提取
type _PromiseValue<T> = T extends Promise<infer R>
  ? R extends Promise<infer N>
    ? N
    : R
  : T;

//* boolean
type Res27 = _PromiseValue<Promise<Promise<boolean>>>;

//* 递归处理任意嵌套深度
type PromiseValue_<T> = T extends Promise<infer R>
  ? R extends Promise<infer N>
    ? PromiseValue_<N>
    : R
  : T;

//* null
type Res28 = PromiseValue_<Promise<Promise<null>>>;
