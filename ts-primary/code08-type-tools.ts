//* 工具类型

//* Partial：接受一个对象类型 将其所有属性都标记为可选

type User = {
  name: string;
  age: number;
  email: string;
};

type PartialUser = Partial<User>;

const user: User = {
  name: "yyll",
  age: 18,
  email: "@163.com",
};

//* 由于属性变成了可选 顾不需要全部都赋值
const partialUser: PartialUser = {
  name: "qiuqiu",
  age: 20,
};

//* Required：将所有属性都标记为必选
type User1 = {
  name?: string;
  age?: number;
  email?: string;
};

type RequireUser = Required<User1>;

const user1: User1 = {
  name: "xixi",
};

//* 由于属性都变成了必选 顾所有的属性都必须赋值
const requiredUser: RequireUser = {
  name: "hah",
  age: 30,
  email: "xx",
};

//* Readonly：将所有属性都标记为只读
type User2 = {
  name: string;
  age: number;
  email: string;
};

type ReadonlyUser = Readonly<User2>;

const user2: User2 = {
  name: "user2",
  age: 19,
  email: "address",
};

const readonlyUser: ReadonlyUser = {
  name: "readonlyUser",
  age: 30,
  email: "readonlyUser address",
};
// readonlyUser.age = 10; //* Cannot assign to 'age' because it is a read-only property.
