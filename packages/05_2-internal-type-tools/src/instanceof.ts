class FooBase {}

class BarBase {}

class Foo extends FooBase {
  fooOnly() {}
}

class Bar extends BarBase {
  barOnly() {}
}

function check(input: Foo | Bar) {
  if (input instanceof FooBase) {
    input.fooOnly;
  } else {
    input.barOnly;
  }
}
