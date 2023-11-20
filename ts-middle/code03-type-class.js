//* class中的类型  主要是 属性、方法、构造函数、访问符
var Foo = /** @class */ (function () {
    //* 构造函数
    function Foo(props) {
        this.props = props;
    }
    Foo.prototype.print = function (addon) {
        console.log("==>Get addon", addon);
    };
    Object.defineProperty(Foo.prototype, "propA", {
        get: function () {
            return "".concat(this.props, "+A");
        },
        set: function (value) {
            this.props = value;
        },
        enumerable: false,
        configurable: true
    });
    Foo.say = function () {
        console.log("静态方法");
    };
    return Foo;
}());
var fooClass = new Foo("滴滴答答");
console.log(fooClass.propA);
