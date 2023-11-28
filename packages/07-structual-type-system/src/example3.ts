class Cat2 {
  eat() {}
}

class Dog2 {
  eat() {}

  bark() {}
}

function feedEat2(cat: Cat2) {}

//* 此时并不会报错 Dog2类型完全实现了Cat2类型
//* 可以理解为Dog2是Cat2的子类
feedEat2(new Dog2());
