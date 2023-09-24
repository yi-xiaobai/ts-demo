class Book {
  // * private权限字段 只能在类的内部中使用
  constructor(private _price: number) {}

  //* 获取price字段
  get price() {
    if (this._price > 20) {
      return this._price + 10;
    } else {
      return this._price + 20;
    }
  }

  //* 设置price字段
  set price(count: number) {
    this._price = count;
  }

  static print() {
    console.log("静态方法~~~~~");
  }
}

const b = new Book(20);
console.log("==>Get price", b.price); //* ==>Get price 40
b.price = 21;
console.log("==>Get price", b.price); //* ==>Get price 31

Book.print(); //* 静态方法~~~~~
