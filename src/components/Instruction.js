import React from 'react';
import "./Instruction.css";

//A Note letting users know the tudo list doesn't save user info. 
//Consider upgrading if project is revisted 
export const Instruction = () => {
  return (
    <div className="instruction">
    Note: The Tudo List will clear if you refresh or leave the page.
  </div>
  )
}