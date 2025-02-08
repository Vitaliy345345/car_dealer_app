'use client';
import { Dropdown } from '@/components/dropdown-select';
import NextButton from '@/components/next-button/next-button';
import { yearOptions } from '@/utils/year-options';
import { useGetMakes } from '@/hooks/useGetMakes';
import { useState } from 'react';
import Loading from '@/components/loading/loading';

export default function Home() {
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const { makes, isLoading, error } = useGetMakes();

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const makeOptions = makes?.map((make) => ({
    label: make.MakeName,
    value: make.MakeId,
  }));
  return (
    <div className="flex flex-col gap-5 px-20">
      <Dropdown
        options={makeOptions}
        value={selectedMake}
        placeholder="Select a make"
        onChange={setSelectedMake}
      />
      <Dropdown
        options={yearOptions}
        value={selectedYear}
        placeholder="Select the year"
        onChange={setSelectedYear}
      />
      <NextButton makeId={selectedMake} year={selectedYear} />
    </div>
  );
}
