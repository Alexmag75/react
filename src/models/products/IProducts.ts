import type {Dimensions} from "./Dimensions.ts";
import type {Reviews} from "./Reviews.ts";
import type {Meta} from "./Meta.ts";

export interface IProducts {
   id: number;
   title: string;
   description: string;
   category: string;
   price: number;
   discountPercentage: number;
   rating: number;
   stock: number;
   tags: string[];
   brand: string;
   sku: string;
   weight?: number;
   dimensions: Dimensions;
   warrantyInformation: string;
   shippingInformation: string;
   availabilityStatus: string;
   reviews: Reviews[];
   returnPolicy: string;
   minimumOrderQuantity: number;
   meta: Meta;
   images: string[];
   thumbnail: string;
}





