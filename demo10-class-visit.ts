//* public  protected  privte 三种访问方式

class Gril {
  public name: string;
  protected sex: string;
  private age: number;  //* 只能在当前类内部使用
  say() {
    console.log("我叫：%s,性别：%s,年龄：%d", this.name, this.sex, this.age);
  }
}

class xiaoHong extends Gril {
  address: string;

  //* 子类访问不到 private修饰符的变量
  info() {
    console.log(super.name, super.sex);
  }
}

//* 外部访问不到 private  protected 修饰符的变量
const g = new Gril();
g.name = "女孩";
