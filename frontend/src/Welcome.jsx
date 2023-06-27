import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = () => {
      setTimeout(() => {
        navigate("/Home");
      }, 2000);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  return (
    <div className="welcome-page">
        <h2>Welcome back, Savvy Sadie!</h2>
    </div>
  );
};
