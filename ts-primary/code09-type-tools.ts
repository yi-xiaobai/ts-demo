//* Record：声明一个内部属性键与键值类型一致的对象类型
type UserProps = "name" | "job" | "email";

type UserString = Record<UserProps, string>;

//* 键值的类型是string
const userRecord: UserString = {
  name: "yyll",
  job: "student",
  email: "163.com",
};

//* 键值的类型是number
type UserNumber = Record<UserProps, number>;
const userNumber: UserNumber = {
  name: 1,
  job: 20,
  email: 3,
};

//* Pick：对对象类型进行裁剪 保留传入的属性名组成的部分
type UserPick = {
  name: string;
  age: number;
  email: string;
  phone: string;
};

//* 只保留了 name、phone两个属性的部分
type UserBaseInfo = Pick<UserPick, "name" | "phone">;
const userBaseInfo: UserBaseInfo = {
  name: "llyy",
  phone: "12345678911",
};

//* Omit:移除传入的属性名的部分，只保留剩下的部分作为新的对象类型
//* 仅去除了phone属性
type UserWitoutPhone = Omit<UserPick, "phone">;
const userWitoutPhone = {
  name: "llyy",
  age: 18,
  email: "11",
};

//* Exclude：它能够从一个类型中移除另一个类型中也存在的部分
type UserPropsExclude = "name" | "age" | "email" | "phone" | "address";
type RequiredUserProps = "name" | "address";

//* 移除RequiredUserProps所包含的数据
type OptionsExclude = Exclude<UserPropsExclude, RequiredUserProps>;
const optionsExclude: OptionsExclude = "email";

//* Extract：提取另一个类型中也存在的部分 即交集
type OptionsExtract = Extract<UserPropsExclude, RequiredUserProps>;
const optionsExtract: OptionsExtract = "name";

//* Parameters：提取函数的参数类型
//* ReturnType：返回值类型
type Add = (x: number, y: number) => number;
// type Add1 = (x: number) => number;F

// 获取参数类型
type AddParams = Parameters<Add>;
const addParams: AddParams = [1, 2];

// 获取返回值类型
type AddReturn = ReturnType<Add>;
const addReturn: AddReturn = 1;

//? 如果只有一个函数 那么就需要通过typeof来获取函数类型 剩余操作跟上面类似
const addHandler = (x: number, y: number) => x + y;

type AddHandler = typeof addHandler;

// 获取参数类型
type AddHandlerParams = Parameters<AddHandler>;
const addHandlerParams: AddHandlerParams = [3, 4];

// 获取返回值类型
type AddHandlerReturn = ReturnType<AddHandler>;
const addHandlerReturn: AddHandlerReturn = 1;

// 定义一个函数，该函数返回一个 Promise 对象
async function getPromise() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 1000);
  });
}

type Result = Awaited<ReturnType<typeof getPromise>>; //* type Result = string
