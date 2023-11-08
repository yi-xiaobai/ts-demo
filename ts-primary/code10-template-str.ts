//* 模板字符串：
type Name = "nihao ts";

type Greeting = `hi ${Name}`; //* type Greeting = "hi nihao ts"

//* 检查版本号
type Version = `${number}.${number}.${number}`;

const v1: Version = "1.2.3";

// 不符合要求
// const v2: Version = "1.2";  //* Type '"1.2"' is not assignable to type '`${number}.${number}.${number}`'

// type SayHello<K> = `hi ${K}`;
// type Greet1 = SayHello<"didi">; //* type Greet2 = "hi didi"
// type Greet2 = SayHello<11>; //* type Greet2 = "hi false"

type Brand = "iphone" | "xiaomi" | "honor";

type SKU = `${Brand}-lasted`; //* type SKU = "iphone-lasted" | "xiaomi-lasted" | "honor-lasted"

type Memory = "16G" | "32G";
type ItemType = "official" | "second-hand";

//* 返回联合类型
//* type SKU1 = "iphone-16G-official" | "iphone-16G-second-hand" | "iphone-32G-official" | "iphone-32G-second-hand" | "xiaomi-16G-official" | "xiaomi-16G-second-hand" | "xiaomi-32G-official" | ... 4 more ... | "honor-32G-second-hand"
type SKU1 = `${Brand}-${Memory}-${ItemType}`;
