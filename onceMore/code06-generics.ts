//*一个联合类型的 泛型示例
type Statuss<T> = "success" | "fail" | "pending" | T;

//* 这里等价于 type CompleteStatus = "success" | "fail" | "pending" | "offine"
//* 此处的泛型T相当于一个函数的入参 //* 一个类型别名如果声明了泛型 等同于变成了一个函数
type CompleteStatus = Statuss<"offine">;

//* factory函数有一个泛型T 当获取到一个参数时 会根据参数的类型给T赋值 并且作为入参和返回值的实际类型

//? input: T 无需操心到底有哪些可能输入的类型
//? (input: T): T 两处使用同一个泛型 那么入参和返回值的类型就一致
function factory<T>(input: T): T {
  return input;
}
