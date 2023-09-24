class Person {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("yyll");
console.log("==>Get 名称为：%s", p.name); //* ==>Get 名称为：yyll
//* p.name = '111'   readonly 只读属性 不允许修改

abstract class behavior {
  abstract readBook(): void;
}

class Primary extends behavior {
  readBook() {
    console.log("==>Get 小学读书");
  }
}

class Middle extends behavior {
  readBook() {
    console.log("==>Get 中学读书");
  }
}

class Seniro extends behavior {
  readBook() {
    console.log("==>Get 高中读书");
  }
}

const p1 = new Primary();
p1.readBook(); //* ==>Get 小学读书
const m = new Middle();
m.readBook(); //* ==>Get 初中读书
const s = new Seniro();
s.readBook(); //* ==>Get 高中读书
