//* 接口的使用

// 定义一个接口
interface Person {
  //* 名称
  name: string;
  //* 年龄
  age: number;
  //! 分数 可选
  score?: number;

  //* 自定义属性 属性key 是 string类型  值是任意类型
  [prop: string]: any;

  //* 方法约束
  say(): string;
}

const user = {
  name: "张三",
  age: 20,
  score: 100,
  address: "四川成都市",
  say() {
    return "四川风情好";
  },
};

//* 用户信息
const userInfo = (user: Person): void => {
  user.age > 18 && console.log(user.name + "成年了，年龄：" + user.age);
  user.age <= 18 && console.log(user.name + "未成年");
};

//* 用户简历
const getResume = (user: Person): void => {
  console.log(
    "==>Get 简历信息：名称：%s，年龄：%d，分数：%d",
    user.name,
    user.age,
    user.score || 0
  );

  user.address && console.log("==>Get 候选人住址：%s", user.address);
  console.log(user.say());
};

userInfo(user); //* 张三未成年
getResume(user); //* ==>Get 简历信息：名称：张三，年龄：18

//* 用类来实现接口的引入
class People implements Person {
  name = "王五";
  age = 30;
  score = 59;
  say() {
    return "接口和类的约束";
  }
}
const p = new People();
console.log("==>Get people", p.name, p.age, p.score, p.say()); //==>Get people 王五 30 59 接口和类的约束

//* 接口之间的继承
interface Teacher extends Person {
  teach(): string;
}

const t = {
  name: "老师",
  age: 19,
  score: 701,
  address: "清华大学",
  say() {
    return "词穷";
  },
  teach() {
    return "教育清华学生";
  },
};
const teacherInfo = (teach: Teacher) => {
  console.log(
    "==>Get 老师信息，名称：%s，年龄：%d，分数：%d，地址：%s，say方法：%s，teach方法：%s",
    teach.name,
    teach.age,
    teach.score,
    teach.address,
    teach.say(),
    teach.teach()
  );
};
teacherInfo(t)
