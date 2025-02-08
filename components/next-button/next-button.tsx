import Link from 'next/link';
import React from 'react';

interface NextButtonProps {
  makeId: string;
  year: string;
}

const NextButton: React.FC<NextButtonProps> = ({ makeId, year }) => {
  const isDisabled = !makeId || !year;
  return (
    <>
      {!isDisabled ? (
        <Link
          className="w-full text-center bg-slate-300 p-3 rounded-md hover:shadow-md transition-all"
          href={`result/${makeId}/${year}`}
        >
          Next
        </Link>
      ) : (
        <p className="w-full text-center bg-slate-300 p-3 rounded-md">
          Please select make and year
        </p>
      )}
    </>
  );
};

export default NextButton;
