import { getVehicleMakes } from '@/services';
import { IVehicle } from '@/types/vehicle-make-interface';
import { useEffect, useState } from 'react';

export const useGetMakes = () => {
  const [makes, setMakes] = useState<IVehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        setIsLoading(true);
        const data = await getVehicleMakes();
        if (data) {
          setMakes(data);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMakes();
  }, []); // ✅ Add an empty dependency array to avoid re-fetching on every render

  return { makes, isLoading, error };
};
