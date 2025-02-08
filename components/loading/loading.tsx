import { LoaderCircle } from 'lucide-react';
import React from 'react';

const Loading = () => {
  return (
    <div className="animate-spin">
      <LoaderCircle />
    </div>
  );
};

export default Loading;
