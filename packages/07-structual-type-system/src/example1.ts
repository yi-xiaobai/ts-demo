//* 基于结构进行兼容性判断的结构化类型系统
class Cat {
  eat() {}
}

class Dog {
  eat() {}
}

function feedEat(cat: Cat) {}

//* 未报错
feedEat(new Dog());

//* 结构化类型系统比较两个类型实际拥有的属性和方法  此时Cat类型和Dog类型的方法一致
