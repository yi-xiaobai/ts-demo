namespace Components {
  export class Header {
    constructor() {
      const ele = document.createElement("div");
      ele.innerText = "头部组件";
      document.body.appendChild(ele);
    }
  }

  export class Content {
    constructor() {
      const ele = document.createElement("div");
      ele.innerText = "内容组件";
      document.body.appendChild(ele);
    }
  }

  export class Footer {
    constructor() {
      const ele = document.createElement("div");
      ele.innerText = "底部组件";
      document.body.appendChild(ele);
    }
  }

  export namespace SubComponents {
    export class Test {
      constructor() {
        console.log("字命名空间");
      }
    }
  }
}
