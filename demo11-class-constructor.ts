class Person {
  //   public name: string;
  //   constructor(name: string) {
  //     this.name = name;
  //   }

  //* 构造函数另一种写法
  constructor(public name: string) {}
}

class Teacher extends Person {
  constructor(public age: number) {
    //* super必须是构造函数中第一行调用的代码
    super("yyll");
  }
}

const p = new Person("yyds");
console.log("==>Get 名称", p.name); //* ==>Get 名称 yyds

const t = new Teacher(20);
console.log("==>Get 名字：%s，年龄：%d", t.name, t.age); //* ==>Get 名字：yyll，年龄：20
