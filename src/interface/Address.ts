export interface City {
  id: number;
  name: string;
}

export interface District {
  id: number;
  city_id: City;
  name: string;
}
