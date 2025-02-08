import { URLs } from '@/constants/api';
import { IVehicle, IVehicleMakes } from '@/types/vehicle-make-interface';

type ApiError = {
  message: string;
  status?: number;
};

type IGetVehicleMakes = () => Promise<IVehicle[] | undefined>;

export const getVehicleMakes: IGetVehicleMakes = async () => {
  try {
    const response = await fetch(`${URLs.BASE_URL}?format=json`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as IVehicleMakes;
    return data.Results;
  } catch (error) {
    const apiError = error as ApiError;
    console.error('Error fetching vehicle makes:', apiError.message);
    return undefined;
  }
};
