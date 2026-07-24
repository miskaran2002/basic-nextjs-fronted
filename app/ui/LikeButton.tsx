"use client"; 

import React from 'react';

export default function LikeButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button onClick={handleClick}>
      Like
    </button>
  );
}