//* type的使用 别名
// 定义一个函数类型
type Sum = (a: number, b: number) => number;

const sum: Sum = (a, b) => {
  return a + b;
};

// 没有返回值
function handler1(): void {}

// undefined 返回类型
function handler2(): undefined {
  return;
}
// 函数重载
function add1(base: number[], incre: number): number[];
function add1(base: number, incre: number[]): number[];

function add1(base: number | number[], incre: number | number[]): number[] {
  const res: number[] = [];
  if (Array.isArray(base) && typeof incre === "number") {
    for (const item of base) {
      res.push(item + incre);
    }
  } else if (Array.isArray(incre) && typeof base === "number") {
    for (const item of incre) {
      res.push(item + base);
    }
  } else if (typeof base === "number" && typeof incre === "number") {
    res.push(base + incre);
  }
  return res;
}

// console.log(add1([1, 2], 2));
// console.log(add1(1, [2, 6]));
