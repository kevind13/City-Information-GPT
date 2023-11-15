import { City } from "./city";

export interface Message {
    text: string;
    sender: string;
    cityInfo?: City
}

export interface CityResponse {
    valid: boolean,
    text: string,
    cityInfo?: City,
}