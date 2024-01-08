import "../styles/Header.css";
import CallIcon from "@mui/icons-material/Call";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header({ isHoveredServices, setIsHoveredServices }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleHover = () => {
    setIsHoveredServices(true);
  };

  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleToggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <>
      <div
        className="top-bar"
        onMouseLeave={() => setIsHoveredServices(false)}
        onMouseEnter={() => setIsHoveredServices(false)}
      >
        <div>
          <span>
            <CallIcon fontSize="50px" style={{ marginRight: 4 }} /> 030 0373
            0001
          </span>
        </div>
      </div>
      <div className="header">
        <div
          className="logo"
          onMouseLeave={() => setIsHoveredServices(false)}
          onMouseEnter={() => setIsHoveredServices(false)}
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/Logo.png"
            alt=""
            className="img"
          />
        </div>
        <div className="header-items-container">
          <div
            className={
              location.pathname === "/"
                ? "header-item header-item-active"
                : "header-item"
            }
            onMouseLeave={() => setIsHoveredServices(false)}
            onMouseEnter={() => setIsHoveredServices(false)}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className="header-item"
            onMouseLeave={() => setIsHoveredServices(false)}
            onMouseEnter={() => setIsHoveredServices(false)}
          >
            About Us
          </div>
          <div
            className={
              location.pathname === "/content-marketing-services"
                ? "header-item header-item-active"
                : "header-item"
            }
            onMouseEnter={handleHover}
          >
            Services
            <ArrowDropDownIcon style={{ paddingTop: 5 }} />
          </div>
          <div
            className="header-item"
            onMouseLeave={() => setIsHoveredServices(false)}
            onMouseEnter={() => setIsHoveredServices(false)}
          >
            Our Clients
          </div>
          <div
            className="header-item"
            onMouseLeave={() => setIsHoveredServices(false)}
            onMouseEnter={() => setIsHoveredServices(false)}
          >
            Blog
          </div>
          <div
            className="header-item"
            onMouseLeave={() => setIsHoveredServices(false)}
            onMouseEnter={() => setIsHoveredServices(false)}
          >
            Case Studies
          </div>
          <div
            className="header-item"
            onMouseLeave={() => setIsHoveredServices(false)}
            onMouseEnter={() => setIsHoveredServices(false)}
          >
            Contact Us
          </div>
        </div>
        <div className="mobile-toggle-button" onClick={handleToggleSlider}>
          ☰
        </div>
        {isSliderOpen && (
          <div className="slider">
            <div className="header-items-container-slider">
              <div
                className={
                  location.pathname === "/"
                    ? "header-item header-item-active"
                    : "header-item"
                }
                onMouseLeave={() => setIsHoveredServices(false)}
                onMouseEnter={() => setIsHoveredServices(false)}
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </div>
              <div
                className="header-item"
                onMouseLeave={() => setIsHoveredServices(false)}
                onMouseEnter={() => setIsHoveredServices(false)}
              >
                About Us
              </div>
              <div
                className={
                  location.pathname === "/content-marketing-services"
                    ? "header-item header-item-active"
                    : "header-item"
                }
                onMouseEnter={handleHover}
              >
                Services
                <ArrowDropDownIcon style={{ paddingTop: 5 }} />
              </div>
              <div
                className="header-item"
                onMouseLeave={() => setIsHoveredServices(false)}
                onMouseEnter={() => setIsHoveredServices(false)}
              >
                Our Clients
              </div>
              <div
                className="header-item"
                onMouseLeave={() => setIsHoveredServices(false)}
                onMouseEnter={() => setIsHoveredServices(false)}
              >
                Blog
              </div>
              <div
                className="header-item"
                onMouseLeave={() => setIsHoveredServices(false)}
                onMouseEnter={() => setIsHoveredServices(false)}
              >
                Case Studies
              </div>
              <div
                className="header-item"
                onMouseLeave={() => setIsHoveredServices(false)}
                onMouseEnter={() => setIsHoveredServices(false)}
              >
                Contact Us
              </div>
            </div>
          </div>
        )}
        {isHoveredServices && (
          <div className="sub-header-item">
            <div className="sub-header-content" onMouseEnter={handleHover}>
              Search Engine Optimisation
            </div>
            <div className="sub-header-content">Social Media Optimisation</div>
            <div
              className="sub-header-content"
              onClick={() => {
                navigate("/content-marketing-services");
              }}
            >
              Content Marketing Services
            </div>
            <div className="sub-header-content">Web Development</div>
          </div>
        )}
      </div>
    </>
  );
}
