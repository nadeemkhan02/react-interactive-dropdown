import React, { useState } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <>
      <p>
        Hello World
      </p>
    </>
    // <div id="react-inter-active-dropdown">
    //   <div onClick={() => setIsOpen(!isOpen)}>
    //     {selected || "Select an option"}
    //   </div>
    //   {isOpen && (
    //     <ul>
    //       {options.map((option) => (
    //         <li key={option} onClick={() => handleSelect(option)}>
    //           {option}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
};

export default Dropdown;
