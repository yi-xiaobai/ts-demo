//* 非空断言
declare const fooNull: {
  func?: () => {
    prop?: number | null;
  };
};

fooNull.func!().prop!.toFixed();

fooNull.func?.().prop?.toFixed();

//* 类型断言还有一种用法是作为代码提示的辅助工具
interface IStruct {
  foo: string;
  bar: {
    barPropA: string;
    barPropB: number;
    barMethod: () => void;
    baz: {
      handler: () => Promise<void>;
    };
  };
}

const obj1 = <IStruct>{
  bar: {
    baz: {},
  },
};
