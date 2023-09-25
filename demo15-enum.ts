//* 枚举类型

function getStatus(status: number) {
  if (status === 0) {
    return "工人";
  } else if (status === 1) {
    return "学生";
  } else if (status === 2) {
    return "老师";
  }
}
console.log("==>Get 初级", getStatus(1));

const Status = {
  WORK: 0,
  STUDENT: 1,
  TEACHER: 2,
};
function getStatus1(status: number) {
  if (status === Status.WORK) {
    return "工人";
  } else if (status === Status.STUDENT) {
    return "学生";
  } else if (status === Status.TEACHER) {
    return "老师";
  }
}

console.log("==>Get 中级", getStatus1(2));

//* 定义一个枚举
enum StatusEnum {
  WORK = 1,
  STUDENT,
  TEACHER,
}

function getStatus2(status: number) {
  if (status === StatusEnum.WORK) {
    return "工人";
  } else if (status === StatusEnum.STUDENT) {
    return "学生";
  } else if (status === StatusEnum.TEACHER) {
    return "老师";
  }
}
console.log("==>Get 枚举", getStatus2(2)); // ==>Get 枚举 工人
console.log("==>Get 根据下标获取元素", StatusEnum[2]); // ==>Get 根据下标获取元素 WORK
