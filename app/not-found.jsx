import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      Page is Not found Please Go to Home Page
      <Link href="/" className="text-blue-500 m-5">
        Go To Home
      </Link>
    </div>
  );
};

export default NotFound;
