import { URLs } from '@/constants/api';
import { IFoundMake, IFoundVehicleMakes } from '@/types/vehicle-make-interface';

type ApiError = {
  message: string;
  status?: number;
};

type IGetVehicle = (
  makeId: string,
  year: string
) => Promise<IFoundMake[] | undefined>;

export const getVehicle: IGetVehicle = async (makeId: string, year: string) => {
  try {
    const response = await fetch(
      `${URLs.MODELS_URL}/${makeId}/modelyear/${year}?format=json`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as IFoundVehicleMakes;
    return data.Results;
  } catch (error) {
    const apiError = error as ApiError;
    console.error('Error fetching vehicle makes:', apiError.message);
    return undefined;
  }
};
