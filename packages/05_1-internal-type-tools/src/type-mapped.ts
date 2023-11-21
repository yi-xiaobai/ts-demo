//* 映射类型：基于键名映射到键值

//* 将键名的类型都转为string
type Stringify<T> = {
  [k in keyof T]: string;
};

interface Foo2 {
  prop1: number;
  prop2: boolean;
  prop3: () => void;
}

/**
 * {
    prop1: string;
    prop2: string;
    prop3: string;
}
 */
type ChangeFoo2 = Stringify<Foo2>;
