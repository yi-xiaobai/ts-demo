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

namespace Home {
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
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
