//* 类型保护

//* 老师类型
interface Teacher {
  name: string;

  // 批改作业
  goHomeWork: () => {};
}

//* 工人类型
interface Worker {
  name: string;

  // 上班
  work: () => {};
}

//* Teacher | Worker 就是联合类型
function typeProtect(person: Teacher | Worker) {
  (person as Teacher).goHomeWork();

  (person as Worker).work();
}

//* 利用 in 关键字看变量 符合条件吗  进行类型保护
function typeProtect1(person: Teacher | Worker) {
  //* person中有没有goHomeWork方法
  if ("goHomeWork" in person) {
    person.goHomeWork();
  } else {
    //* 否则执行work方法
    person.work();
  }
}

//* 利用typeof进行类型保护
function add(num: string | number, num1: string | number) {
  if (typeof num === "string" || typeof num1 === "string") {
    return `${num}${num1}`;
  } else {
    return num + num1;
  }
}

//* 对类进行类型保护
class NumberObj {
  count: number;
}

function addObj(first: Object | NumberObj, second: Object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
