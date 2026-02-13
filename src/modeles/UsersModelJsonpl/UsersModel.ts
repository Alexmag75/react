import type {Address} from "./Address.ts";
import type {Company} from "./Company.ts";

export  interface UsersModel {
   id: number;
   name: string;
   username: string;
   email: string;
   address: Address;
   phone: string;
   website: string;
   company: Company;
}





