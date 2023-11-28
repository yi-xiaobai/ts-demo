class Cat1 {
  eat() {}

  meow() {}
}

class Dog1 {
  eat() {}
}

function feedEat1(cat: Cat1) {}

//! 报错
// feedEat1(new Dog1())

//* 结构化类型系统比较两个类型实际拥有的属性和方法
