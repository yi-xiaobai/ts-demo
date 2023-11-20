//* class中的类型  主要是 属性、方法、构造函数、访问符

class Foo {
  //* 构造函数
  constructor(private props: string) {}

  public print(addon: string) {
    console.log("==>Get addon", addon);
  }

  public get propA(): string {
    return `${this.props}+A`;
  }

  public set propA(value: string) {
    this.props = value;
  }

  static say() {
    console.log("静态方法");
  }

  test(age: number): number;
  test(name: string): string;

  //* 函数重载
  test(k: number | string): number | string {
    return k;
  }
}

const fooClass = new Foo("滴滴答答");
console.log(fooClass.propA); //* 滴滴答答+A

//* 抽象类：描述了类中应该有哪些成员（属性、方法等）抽象方法描述了这一方法在实际实现中的结构
abstract class AbsFoo {
  abstract absprops: string;

  abstract get absGetter(): string;

  abstract absMethod(name: string): string;
}

//* 实现这个抽象类
//* 个人理解为“规矩”
class Foo1 implements AbsFoo {
  absprops: string;

  get absGetter(): string {
    return this.absGetter;
  }

  absMethod(name: string): string {
    return name;
  }
}
