import type {Geo} from "./UsersModel.ts";

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}