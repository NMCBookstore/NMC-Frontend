export interface City {
  id: number;
  name: string;
}

export interface District {
  id: number;
  city_id: City;
  name: string;
}

export interface Address {
  id: number;
  address: string;
  city: string;
  district: string;
  city_id: City["id"];
  district_id: District["id"];
}

export interface Ward {
  WardCode: number;
  DistrictID: District["id"];
  WardName: string;
}
export interface WardReponse {
  code: number;
  message: string;
  data: Ward[];
}
