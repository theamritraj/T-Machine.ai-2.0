import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img
          src="./src/assets/navBar/logo.png"
          alt="logo"
          className="navbar-logo"
        />
      </div>

      {/* Frame 1312 */}
      <img
        src="./src/assets/navBar/Frame 1312.png"
        alt="Frame 1312"
        className="frame-1312"
      />

      {/* Vector */}
      <img
        src="./src/assets/navBar/vector.png"
        alt="vector"
        className="vector"
      />

      {/* Bar*/}
      <img
        src="./src/assets/navBar/bar.png"
        alt="bar"
        className="bar"
      />

      {/* Person*/}
      <img
        src="./src/assets/navBar/person.png"
        alt="person"
        className="person"
      />

       {/* Person*/}
       <img
        src="./src/assets/navBar/lay"
        alt="person"
        className="person"
      />

      
    </nav>
  );
};

export default Navbar;
