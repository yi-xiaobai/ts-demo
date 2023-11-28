//* 在 TypeScript 中模拟标称类型系统
export declare class TagProtector<T extends string> {
  protected __tag__: T;
}

export type Nominal<T, U extends string> = T & TagProtector<U>;

export type CNY = Nominal<number, "CNY">;
export type USD = Nominal<number, "USD">;

const CNYCount = 100 as CNY;
// const CNYCount:CNY = 100;
const USDCount = 100 as USD;

function addCNY(a1: CNY, a2: CNY) {
  return a1 + a2;
}

addCNY(CNYCount, CNYCount);
//! 报错
addCNY(CNYCount, USDCount);

//* 运行时无法进一步限制
