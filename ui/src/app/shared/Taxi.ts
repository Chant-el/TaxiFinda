import { Guid } from "guid-typescript";

export default class Taxi {
    id!: Guid;
    registration!: string;
    rank_name!: string;
    destination!: string;
    price!: number;

    Taxi() {
        
    }
}