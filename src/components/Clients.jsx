import { useState } from "react";
import "../styles/Clients.css";
export default function Clients({ setIsHoveredServices }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="our-clients-section"
      onMouseLeave={() => setIsHoveredServices(false)}
      onMouseEnter={() => setIsHoveredServices(false)}
    >
      <div className="toggle-btn-ccontainer">
        <div
          className={
            toggle
              ? "client-toggle-btn-unselected"
              : "client-toggle-btn-selected"
          }
          onClick={() => setToggle(false)}
        >
          Our Clients
        </div>
        <div
          className={
            toggle
              ? "client-toggle-btn-selected"
              : "client-toggle-btn-unselected"
          }
          onClick={() => setToggle(true)}
        >
          Case Study
        </div>
      </div>
      {toggle ? (
        <div
          className="all-case-study-container"
          onMouseLeave={() => setIsHoveredServices(false)}
          onMouseEnter={() => setIsHoveredServices(false)}
        >
          <div className="case-study-box">
            <div className="case-study-image-main">
              <div className="case-study-image-box">
                <img
                  alt=""
                  src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/lockman247.jpg"
                  className="case-study-image"
                />
              </div>
            </div>
            <div className="case-study-content-box">
              <div className="case-study-heading">Lockman247</div>
              <div className="case-study-industry">
                <b>Industry: </b>Locksmith
              </div>
              <span className="case-study-provider">Service Provider, U.K</span>
              <p>
                <em>Work Done: Website Designing and Web Development</em>
              </p>
            </div>
          </div>
          <div className="case-study-box">
            <div className="case-study-image-main">
              <div className="case-study-image-box">
                <img
                  alt=""
                  src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/mcab-taxi.jpg"
                  className="case-study-image"
                />
              </div>
            </div>
            <div className="case-study-content-box">
              <div className="case-study-heading">Lockman247</div>
              <div className="case-study-industry">
                <b>Industry: </b>Locksmith
              </div>
              <span className="case-study-provider">Service Provider, U.K</span>
              <p>
                <em>Work Done: Website Designing and Web Development</em>
              </p>
            </div>
          </div>
          <div className="case-study-box">
            <div className="case-study-image-main">
              <div className="case-study-image-box">
                <img
                  alt=""
                  src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/alan-lam.jpg"
                  className="case-study-image"
                />
              </div>
            </div>
            <div className="case-study-content-box">
              <div className="case-study-heading">Lockman247</div>
              <div className="case-study-industry">
                <b>Industry: </b>Locksmith
              </div>
              <span className="case-study-provider">Service Provider, U.K</span>
              <p>
                <em>Work Done: Website Designing and Web Development</em>
              </p>
            </div>
          </div>
          <div className="case-study-box">
            <div className="case-study-image-main">
              <div className="case-study-image-box">
                <img
                  alt=""
                  src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/108-builders.jpg"
                  className="case-study-image"
                />
              </div>
            </div>
            <div className="case-study-content-box">
              <div className="case-study-heading">Lockman247</div>
              <div className="case-study-industry">
                <b>Industry: </b>Locksmith
              </div>
              <span className="case-study-provider">Service Provider, U.K</span>
              <p>
                <em>Work Done: Website Designing and Web Development</em>
              </p>
            </div>
          </div>
          <div className="case-study-box">
            <div className="case-study-image-main">
              <div className="case-study-image-box">
                <img
                  alt=""
                  src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/lab-daimond.jpg"
                  className="case-study-image"
                />
              </div>
            </div>
            <div className="case-study-content-box">
              <div className="case-study-heading">Lockman247</div>
              <div className="case-study-industry">
                <b>Industry: </b>Locksmith
              </div>
              <span className="case-study-provider">Service Provider, U.K</span>
              <p>
                <em>Work Done: Website Designing and Web Development</em>
              </p>
            </div>
          </div>
          <div className="case-study-box">
            <div className="case-study-image-main">
              <div className="case-study-image-box">
                <img
                  alt=""
                  src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/baby-pink.jpg"
                  className="case-study-image"
                />
              </div>
            </div>
            <div className="case-study-content-box">
              <div className="case-study-heading">Lockman247</div>
              <div className="case-study-industry">
                <b>Industry: </b>Locksmith
              </div>
              <span className="case-study-provider">Service Provider, U.K</span>
              <p>
                <em>Work Done: Website Designing and Web Development</em>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="all-clients-container"
          onMouseLeave={() => setIsHoveredServices(false)}
          onMouseEnter={() => setIsHoveredServices(false)}
        >
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/vee-mobile.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/andypark-promotion.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/baby-pink.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/coulstone.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/DW-store.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/labmadediamond.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/lockman.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/sparta-telecom.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/massey-property-services.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/m-cabs-taxi.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/north-west-territory.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/108-builders.png"
            />
          </div>
          <div className="client-box">
            <img
              alt=""
              className="client-image"
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/alan-lam-kinesiology.png"
            />
          </div>
          <div className="client-box">
            <img
              className="client-image"
              alt=""
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/paul-bailey-construction-limited.png"
            />
          </div>
        </div>
      )}
    </div>
  );
}
