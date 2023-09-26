"use strict";
var Components;
(function (Components) {
    class Header {
        constructor() {
            const ele = document.createElement("div");
            ele.innerText = "头部组件";
            document.body.appendChild(ele);
        }
    }
    Components.Header = Header;
    class Content {
        constructor() {
            const ele = document.createElement("div");
            ele.innerText = "内容组件";
            document.body.appendChild(ele);
        }
    }
    Components.Content = Content;
    class Footer {
        constructor() {
            const ele = document.createElement("div");
            ele.innerText = "底部组件";
            document.body.appendChild(ele);
        }
    }
    Components.Footer = Footer;
    let SubComponents;
    (function (SubComponents) {
        class Test {
            constructor() {
                console.log("字命名空间");
            }
        }
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
})(Components || (Components = {}));
// class Header {
//   constructor() {
//     const ele = document.createElement("div");
//     ele.innerText = "头部组件";
//     document.body.appendChild(ele);
//   }
// }
// class Content {
//   constructor() {
//     const ele = document.createElement("div");
//     ele.innerText = "内容组件";
//     document.body.appendChild(ele);
//   }
// }
// class Footer {
//   constructor() {
//     const ele = document.createElement("div");
//     ele.innerText = "底部组件";
//     document.body.appendChild(ele);
//   }
// }
// class Page {
//   constructor() {
//     new Header();
//     new Content();
//     new Footer();
//   }
// }
var Home;
(function (Home) {
    //   class Header {
    //     constructor() {
    //       const ele = document.createElement("div");
    //       ele.innerText = "头部组件";
    //       document.body.appendChild(ele);
    //     }
    //   }
    //   class Content {
    //     constructor() {
    //       const ele = document.createElement("div");
    //       ele.innerText = "内容组件";
    //       document.body.appendChild(ele);
    //     }
    //   }
    //   class Footer {
    //     constructor() {
    //       const ele = document.createElement("div");
    //       ele.innerText = "底部组件";
    //       document.body.appendChild(ele);
    //     }
    //   }
    //* 暴露出去
    class Page {
        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
