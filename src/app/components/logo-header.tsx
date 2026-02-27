import React from "react";

const Logo = () => {
  return (
    <svg
      width="2.5em"
      height="2.5em"
      viewBox="0 0 98 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Marco */}
      <path
        d="
          M97.5 2H2V43.6667V52.8333
          M97.7 102H2V52.8333
          M96 19.6667H20.6275V85.75H94V52.8333H78.4314
          M2 52.8333H13.2745
        "
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* A */}
      <path
        d="
          M30 75 L40 35 L50 75
          M35 60 H45
        "
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* B */}
      <path
        d="
          M58 35 V75
          M58 35 H72 Q80 35 80 45 Q80 55 72 55 H58
          M58 55 H74 Q84 55 84 65 Q84 75 74 75 H58
        "
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;