import { getVehicle } from '@/services/get-vehicle';
import React from 'react';

interface ModelListProps {
  makeId: string;
  year: string;
}

const ModelList: React.FC<ModelListProps> = async ({ makeId, year }) => {
  const models = await getVehicle(makeId, year);

  return (
    <div className="flex flex-col w-full items-center h-full">
      <div className="flex gap-14 flex-col p-20 w-full">
        <h1 className="bg-slate-300 rounded-md p-3 shadow-md text-center">
          Models for: {makeId}, {year}
        </h1>
        <div>
          {models?.length ? (
            <ul className="flex flex-col gap-2">
              {models?.map((item) => (
                <li
                  key={`${item?.Model_ID}-${item?.Make_ID}-${makeId}-${year}`}
                >
                  <section className="hover:bg-slate-300 border p-2 rounded-md shadow-sm">
                    {item.Make_Name} - {item.Model_Name}
                  </section>
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-2 bg-orange-300 rounded-md text-center shadow-md">
              There is no models with selected year and make
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelList;
