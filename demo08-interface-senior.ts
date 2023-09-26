//* 类具有两个类型  静态类型和实例类型
//* 当类实现一个接口时 只会对实例部分进行检查  constructor 是静态类型 不在检查的范围里面

//* 静态接口
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

//* 实例接口
interface ClockInterface {
  tick(): void;
}

function createInstance(ctor: ClockConstructor, h: number, m: number) {
  return new ctor(h, m);
}

class DigitalClock implements ClockInterface {
  constructor(public h: number, public m: number) {}
  tick() {
    console.log("==>Get tick", this.h, this.m);
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}

  tick(): void {
    console.log("==>Get tick", 22);
  }
}

const digital = createInstance(DigitalClock, 13, 14);
digital.tick();

const analog = createInstance(AnalogClock, 5, 20);
