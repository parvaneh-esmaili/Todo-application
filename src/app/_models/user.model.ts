export class IRegisterUserModel{
    constructor( 
        public username: string = '',
        public email: string = '',
        public password: string = '',
    ){}
};


export interface IUserRequestBody {
  idemtifire: string;
  password: string;
};


export interface IUserResponse{
  jwt: string,
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: string;
    blocked: string;
    createdAt: string;
    updateAt: string

  }


}
