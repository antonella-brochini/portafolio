import React from "react";

const Esquina = () => {
  return (
<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">

  <defs>
    <pattern id="dotsMini" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1" fill="black" />
    </pattern>
  </defs>

  <rect x="18" y="18" width="24" height="24" fill="#8B5CF6" />

  <rect 
    x="12" 
    y="10" 
    width="24" 
    height="24" 
    fill="none" 
    stroke="#8B5CF6" 
    stroke-width="2" 
  />
  <rect x="38" y="38" width="16" height="16" fill="url(#dotsMini)" />

</svg>
  )
}

export default Esquina;