interface IFoo {
  foo: string;
  kind: "foo";
  diffType: string;
  fooOnly: boolean;
  shared: number;
}

interface IBar {
  bar: string;
  kind: "bar";
  diffType: number;
  barOnly: boolean;
  shared: number;
}

function handle(input: IFoo | IBar) {
  //* in方式判断是否存在于object或者原型链上
  if ("foo" in input) {
    input.fooOnly;
  } else {
    input.barOnly;
  }
}

function handle1(input: IFoo | IBar) {
  //* shared作为两个接口公共的属性 没有区分度
  if ("shared" in input) {
    // input.fooOnly; //* Bar属性上不存在fooOnly
  } else {
    // input.barOnly;   //* never 类型上不存在barOnly
  }
}

function handle2(input: IFoo | IBar) {
  if (input.kind === "bar") {
    input.barOnly;
  } else {
    input.fooOnly;
  }
}

function _handle2(input: IFoo | IBar) {
  if (typeof input.diffType === 'number') {
    // input.barOnly
  }
}
