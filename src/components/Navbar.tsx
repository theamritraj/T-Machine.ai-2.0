import "../styles/navbar.css";

const Navbar = () => {
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

     <div className="navbar-icons">
       {/* Frame Moon */}
       <img
        src="./src/assets/navBar/moon.png"
        alt="Moon"
        className="moon"
      />
      {/* Frame Home */}
      <img
        src="./src/assets/navBar/home.png"
        alt="Home"
        className="moon"
      />
      {/* Frame File */}
      <img
        src="./src/assets/navBar/vector.png"
        alt="File"
        className="moon"
      />
      {/* Frame Bar */}
      <img
        src="./src/assets/navBar/bar.png"
        alt=""
        className="moon"
      />
      {/* Frame person */}
      <img
        src="./src/assets/navBar/person.png"
        alt="person"
        className="moon"
      />
      {/* Frame Moon */}
      <img
        src="./src/assets/navBar/logout.svg"
        alt="logout"
        className="moon"
      />
      

      
     
     </div>
      
    </nav>
  );
};

export default Navbar;
