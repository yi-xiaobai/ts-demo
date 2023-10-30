let useAge: number = 0;

/**
 * ts类型分为两种 一种原始类型和对象类型
 */

// 数组类型
let useArray: string[] = ["1", "2", "#"];
let useArray1: Array<string> = ["3", "4", "5"];

// 对象类型
interface User {
  name: string;
  age: number;
  marry: boolean;
  job?: string;
}
const user: User = {
  name: "yyds",
  age: 18,
  marry: true,
};

// 数组对象类型
const useList: User[] = [
  {
    name: "yyll",
    age: 20,
    marry: false,
  },
  {
    name: "ll",
    age: 16,
    marry: true,
  },
];

// 枚举
enum UserLevelCode {
  Visitor = 10001,
  NonVIPUser = 10002,
  VIPUser = 10003,
  Admin = 10004,
}
