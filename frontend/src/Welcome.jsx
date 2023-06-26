// import React, { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';


// export const Welcome = () => {
//   const navigate = useNavigate();

//     return (
//         <div className="welcome-page">
//             <h2>Welcome back</h2>
//             <h2>NAME!</h2>
//         </div>
//     )

// //     useEffect(() => {
// //       const handleClick = () => {
// //         navigate("/Home");
// //       };
  
// //       document.addEventListener('click', handleClick);
  
// //       return () => {
// //         document.removeEventListener('click', handleClick);
// //       };
// //     }, [navigate]);

// }


import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = () => {
      navigate("/Home");
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  return (
    <div className="welcome-page">
        <h2>Welcome back</h2>
        <h2>NAME!</h2>
    </div>
  );
};
