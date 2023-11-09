//* 字面量类型和枚举类型
// declare var res: ResStr;
// if (res.status === "success") {
// }
//* 字符串字面量类型
var str1 = "didi";
//* 数字字面量类型
var numStr = 999;
//* 布尔字面量类型
var flagStr = true;
//? 太固定化了
var objTmp1 = {
    obj: {
        name: "didi",
        age: 30,
    },
};
//* 枚举类型
var PageUrl;
(function (PageUrl) {
    PageUrl["Home_Page_Url"] = "url1";
    PageUrl["Setting_Page_Url"] = "url2";
    PageUrl["Share_Page_Url"] = "url3";
})(PageUrl || (PageUrl = {}));
//* 默认从0开始
var Item;
(function (Item) {
    Item[Item["Foo"] = 0] = "Foo";
    Item[Item["Bar"] = 1] = "Bar";
    Item[Item["Baz"] = 2] = "Baz";
})(Item || (Item = {}));
console.log(Item.Foo); //* 0
console.log(Item.Bar); //* 1
console.log(Item.Baz); //* 2
var Item1;
(function (Item1) {
    Item1[Item1["Foo"] = 0] = "Foo";
    Item1[Item1["Bar"] = 599] = "Bar";
    Item1[Item1["Baz"] = 600] = "Baz";
})(Item1 || (Item1 = {}));
console.log(Item1.Foo); //* 0
console.log(Item1.Bar); //* 599
console.log(Item1.Baz); //* 600
//* 延迟求值
//! 没有使用延迟求值的枚举成员必须放在使用常量枚举值声明的成员之后或者放在第一位
var returnNum = function () { return 100 + 499; };
var Item2;
(function (Item2) {
    Item2[Item2["Foo"] = returnNum()] = "Foo";
    Item2[Item2["Bar"] = 600] = "Bar";
    Item2[Item2["Baz"] = 601] = "Baz";
})(Item2 || (Item2 = {}));
console.log(Item2.Foo); //* 599
console.log(Item2.Bar); //* 600
console.log(Item2.Baz); //* 601
console.log(Item2[599]); //* Foo    进行双向枚举
console.log(Item2[600]); //* Bar
console.log(Item2[601]); //* Baz
//* 仅值为数字的枚举成员能进行双向枚举 字符串的仍然不行
var Item3;
(function (Item3) {
    Item3[Item3["Foo"] = 0] = "Foo";
    Item3["Bar"] = "haha";
    Item3["Baz"] = "wuwu";
})(Item3 || (Item3 = {}));
console.log(Item3.Bar); //* haha
var fooValue = 0 /* Item5.Foo */;
