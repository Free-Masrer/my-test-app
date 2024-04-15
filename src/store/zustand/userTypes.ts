export interface UserInfo {
  firstName: string;
  lastName: string;
  nickname: string;
  avatar: string;
  email: string;
  phone: string;
}

export interface UserResponse {
  data: UserInfo;
}

export interface ErrorResponse {
  data: {
    message: string;
  };
}
