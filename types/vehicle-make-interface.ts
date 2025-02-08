export interface IVehicle {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface IFoundMake {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface IVehicleMakes {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVehicle[];
}

export interface IFoundVehicleMakes {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IFoundMake[];
}
