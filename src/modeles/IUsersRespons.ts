import type {IUsers} from "./IUsers.ts";

export interface IUsersRespons {
   total?: number;
   skip?: number;
   limit?: number;
   users:IUsers[]
}