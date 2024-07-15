import Link from "next/link";
import React from "react";

const BackLink = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
    >
      <span className="mr-2">←</span>
      Back
    </Link>
  );
};

export default BackLink;
