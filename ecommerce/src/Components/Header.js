import logo from "../logo2.jpg";
import './Components.css';
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="title">
        <h2>E-commerce Product Management </h2>
      </div>
    </div>
  );
}

export default Header;
