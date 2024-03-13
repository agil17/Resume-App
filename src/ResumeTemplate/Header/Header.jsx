import "./Header.css";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

function Header({ personalDetails }) {
  return (
    <div className="Header">
      <h1 className="name">{personalDetails.name}</h1>
      <div className="contact-info">
        <div className="email">
          <FaEnvelope />
          <span>{personalDetails.email}</span>
        </div>
        <div className="phone">
          <FaPhone />
          <span>{personalDetails.phone}</span>
        </div>
        <div className="addresss">
          <FaLocationDot />
          <span>{personalDetails.address}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
