export class IuserModel{
    constructor( 
        public username: string = '',
        public email: string = '',
        public password: string = '',
    ){}
};


export interface IloginResponse {
  jwt: string;
  user: {
    id: number;
  };
}
