//* class好处：封装、继承、多态

class Person3 {
  // 权限
  //* 构造函数写法
  constructor(private name: string, private age: number) {}

  public getDesc(): string {
    return `${this.name} at ${this.age} years old`;
  }

  public getName(): string {
    return this.name;
  }

  public getUpperCaseName(): string {
    return this.name.toLocaleUpperCase();
  }

  get age3() {
    if (this.age > 20) {
      return this.age + 20;
    } else {
      return this.age + 10;
    }
  }

  set age3(age: number) {
    this.age = age;
  }

  // 静态方法
  static isSameDate(): boolean {
    return true;
  }
}

const p3 = new Person3("yyds", 18);
console.log(p3.getDesc()); //* yyds at 18 years old
console.log(p3.getName()); //* yyds
console.log(p3.getUpperCaseName()); //* YYDS
//* 以上都是class的实例方法 还有静态方法

//* 静态方法直接类进行调用 不需要实例化
console.log(Person3.isSameDate());

//* 类的get set 方法
console.log(p3.age3); //* 28
p3.age3 = 21;
console.log(p3.age3); //* 41
