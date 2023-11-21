//* 联合类型和交叉类型
//* 联合类型：与（｜）满足其一即可
//* 交叉类型：且（&）都得满足

interface NameStruct {
  name: string;
}

interface AgeStruct {
  age: number;
}

//* 定义一个类型别名 同时要满足 NameStruct 和 AgeStruct
type ProfileStruct = NameStruct & AgeStruct;
const profile: ProfileStruct = {
  name: "yyds",
  age: 18,
};

//* never:根本不存在的类型
type StrAndNum = string & number; //* never

//* 由两个联合类型组成的交叉类型  实现联合类型的交集即可
type section = (1 | 2 | 3) & (1 | 2); //* 1 | 2
type section1 = (string | number | boolean) & string; //* string
