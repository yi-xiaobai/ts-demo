interface IRes<T = unknown> {
  code: number;
  error?: string;
  data: T;
}

interface IUserProfile {
  name: string;
  homepage: string;
  avatar: string;
}

//* 针对于分页结构 可以抽离出来
interface IPaginationRes<T> {
  data: T[];
  page: number;
  total: number;
  hasNextPage: boolean;
}

type UserProfile = IRes<IUserProfile>;

type UserProfileList = IRes<IPaginationRes<IUserProfile>>;

// function fetchUserProfile(): Promise<IRes<IUserProfile>> {}
