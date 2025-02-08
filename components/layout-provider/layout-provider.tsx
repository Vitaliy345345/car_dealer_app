import React from 'react';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="w-full flex justify-center text-2xl text-slate-600 my-5">
        <h1>Car Dealer App</h1>
      </header>
      <main className="h-full">{children}</main>
    </>
  );
};

export default LayoutProvider;
