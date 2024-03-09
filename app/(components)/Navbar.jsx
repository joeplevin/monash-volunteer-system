import React, { useState } from "react";
import { BsList, BsX } from "react-icons/bs"; // Import the menu icon

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="bg-gray-800 px-4 py-2 flex items-center justify-between">
      <div className="navbar-logo">
        <img src="/app/UniversityHome/Logo.jpg" alt="Logo" />
      </div>
      {/* Display the menu or close icon based on the state */}
      {openMenu ? (
        <BsX className="text-white text-2xl" onClick={toggleMenu} />
      ) : (
        <BsList className="text-white text-2xl" onClick={toggleMenu} />
      )}
      {/* Add the "open" class conditionally based on the state */}
      <div className={`navbar-menu-container ${openMenu ? "block" : "hidden"}`}>
        {openMenu && (
          <>
            <a href="#" className="block text-white mt-2">Dashboard</a>
            <a href="#" className="block text-white mt-2">Schedule</a>
            <a href="#" className="block text-white mt-2">Inbox</a>
            <a href="#" className="block text-white mt-2">Tasks</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
