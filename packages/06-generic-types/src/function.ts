function handle<T>(input: T): T {
  return input;
}

let age = 18;
handle("yyll");
handle(age);
handle(true);

//* 泛型约束 限制为string number类型
function _handle<T extends string | number>(input: T): T {
  return input;
}

_handle("11");
_handle(66);
