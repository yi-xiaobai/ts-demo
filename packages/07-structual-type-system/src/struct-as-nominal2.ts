//* 在 TypeScript 中模拟标称类型系统

class CNY1 {
  private __tag!: void;
  constructor(public value: number) {}
}

class USD1 {
  private __tag!: void;
  constructor(public value: number) {}
}

const count1 = new CNY1(100);

const count2 = new USD1(100);

function addCNY1(a1: CNY1, a2: CNY1) {
  return a1.value + a2.value;
}

addCNY1(count1, count1);

//! 报错
addCNY1(count1, count2);
