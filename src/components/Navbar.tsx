import { useEffect, useState } from "react";
import "../styles/navbar.css";

type NavItem = {
  alt: string;
  src: string;
};

const Navbar = () => {
  const [navItems, setNavItems] = useState<NavItem[]>([]);

  useEffect(() => {
    fetch("/src/data/navbarData.json")
      .then((response) => response.json())
      .then((data) => setNavItems(data))
      .catch((error) => console.error("Error loading navbar data:", error));
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img
          src="./src/assets/navBar/logo.svg"
          alt="logo"
          className="navbar-logo"
        />
      </div>

      {/* Navbar Icons */}
      <div className="navbar-icons">
        {navItems.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="navbar-icon"
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
