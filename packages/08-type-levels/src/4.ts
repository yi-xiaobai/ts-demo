type Result14 = string extends String ? 1 : 2; //* 1
type Result15 = String extends {} ? 1 : 2; //* 1
type Result16 = {} extends object ? 1 : 2; //* 1
type Result17 = object extends Object ? 1 : 2; //* 1

type Tmp = string extends object ? 1 : 2; //* 2
