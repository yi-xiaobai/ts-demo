//* 多泛型关联
type Conditional<K, T, R1, R2> = K extends T ? R1 : R2;

type Result1 = Conditional<"yyds", string, "passed", "no">; //* type Result1 = "passed"

type Result2 = Conditional<"yyll", number, "passed", "rejected">; //* type Result2 = "rejected"
