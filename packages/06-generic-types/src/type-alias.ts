type Factory<T> = string | number | T;

type BoolWithFactory = Factory<boolean>; //* string | number | boolean

//* 对象类型变成字符串
type Stringify<T> = {
  [K in keyof T]: string;
};

//* 复制的工具类型
type Clone<T> = {
  [K in keyof T]: T[K];
};

//* 可选
type Partial1<T> = {
  [K in keyof T]?: T[K];
};

interface IUser {
  name: string;
  age: number;
}

/**
 * type StrUser = {
    name: string;
    age: string;
}
 */
type StrUser = Stringify<IUser>;

/**
 * type CloneUser = {
    name: string;
    age: number;
}
 */
type CloneUser = Clone<IUser>;

/**
 * type PartialUser = {
    name?: string | undefined;
    age?: number | undefined;
}
 */
type PartialUser = Partial1<IUser>;
