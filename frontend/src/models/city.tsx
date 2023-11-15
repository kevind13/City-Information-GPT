export interface City {
    name:        string;
    country:     string;
    population:  string;
    currency:    string;
    land_area:   string;
    coordinates: Coordinates;
}

export interface Coordinates {
    lat: number;
    lng: number;
}