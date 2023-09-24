class Animate {
  name = "动物";

  sleep() {
    return this.name + "在睡觉";
  }
}

const a = new Animate();
console.log(a.sleep()); //* 动物在睡觉

//* 类继承
class Dog extends Animate {
  eat() {
    console.log("🐶吃饭");
  }

  sleep() {
    return "萨摩耶在睡觉";
  }

  say() {
    return super.sleep() + "子类通过super关键字来的";
  }
}
const d = new Dog();
console.log("==>Get name", d.name); //* ==>Get name 动物
d.eat(); //* 🐶吃饭

//* 重写方法
console.log(d.sleep()); //* 萨摩耶在睡觉

//* super关键字
console.log(d.say()); //* 动物在睡觉子类通过super关键字来的
