//* 标称类型系统：两个可兼容的系统 名称必须完全一致

type USD = number;
type CNY = number;

const UsdCount: USD = 200;
const CnyCount: CNY = 200;

function addCNY(a1: CNY, a2: CNY) {
  return a1 + a2;
}

addCNY(UsdCount, CnyCount);

//* USD  CNY 是两个不同的类型 addCNY函数可以穿入USD类型的变量 不符合标称类型系统
