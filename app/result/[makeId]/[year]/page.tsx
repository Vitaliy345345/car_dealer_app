import Loading from '@/components/loading/loading';
import ModelList from '@/components/model-list/model-list';
import { getVehicleMakes } from '@/services';
import { yearOptions } from '@/utils/year-options';
import React, { Suspense } from 'react';

export async function generateStaticParams() {
  const makes = await getVehicleMakes();

  return makes?.flatMap((make) =>
    yearOptions.map((year) => ({
      makeId: make.MakeId.toString(),
      year: year.value.toString(),
    }))
  );
}

const page = async ({
  params,
}: {
  params: Promise<{ makeId: string; year: string }>;
}) => {
  const { makeId, year } = await params;
  console.log(`${makeId}, ${year}`);

  return (
    <Suspense fallback={<Loading />}>
      <ModelList makeId={makeId} year={year} />;
    </Suspense>
  );
};

export default page;
