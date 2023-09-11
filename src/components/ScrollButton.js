import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <button

      className={classNames('fixed', 'bottom-4', 'right-4', 'p-2', 'rounded-full', 'bg-[#ec634b]')}
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
