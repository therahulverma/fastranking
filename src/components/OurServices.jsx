import "../styles/OurServices.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function OurServices({
  isHoveredServices,
  setIsHoveredServices,
}) {
  return (
    <div
      className="our-service-section"
      onMouseLeave={() => setIsHoveredServices(false)}
      onMouseEnter={() => setIsHoveredServices(false)}
    >
      <div className="our-service-heading">Our Services</div>
      <div className="service-sub-heading">
        We provide smart and dynamic digital marketing services that help
        companies thrive.
      </div>
      <div className="service-all-container">
        <div className="service-box">
          <img
            alt=""
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/SEO.png"
            className="service-image"
          />
          <div className="service-heading">Search Engine Optimization </div>
          <span className="service-read-more">
            Read More
            <ArrowForwardIcon className="service-read-more-arrow" />
          </span>
        </div>
        <div className="service-box">
          <img
            alt=""
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/Social-Media.png"
            className="service-image"
          />
          <div className="service-heading">Social Media Optimization</div>
          <div>
            <span className="service-read-more">
              Read More <ArrowForwardIcon className="service-read-more-arrow" />
            </span>
          </div>
        </div>
        <div className="service-box">
          <img
            alt=""
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/content-writing.png"
            className="service-image"
          />
          <div className="service-heading">Content Marketing</div>
          <div>
            <span className="service-read-more">
              Read More <ArrowForwardIcon className="service-read-more-arrow" />
            </span>
          </div>
        </div>
        <div className="service-box">
          <img
            alt=""
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/Web-development.png"
            className="service-image"
          />
          <div className="service-heading">Web development</div>
          <div>
            <span className="service-read-more">
              Read More
              <ArrowForwardIcon className="service-read-more-arrow" />
            </span>
          </div>
        </div>
        <div className="service-box">
          <img
            alt=""
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/GMB.png"
            className="service-image"
          />
          <div className="service-heading">Google My Business</div>
          <div>
            <span className="service-read-more">
              Read More <ArrowForwardIcon className="service-read-more-arrow" />
            </span>
          </div>
        </div>
        <div className="service-box">
          <img
            alt=""
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/SEO.png"
            className="service-image"
          />
          <div className="service-heading">Website SEO</div>
          <div>
            <span className="service-read-more">
              Read More
              <ArrowForwardIcon className="service-read-more-arrow" />
            </span>
          </div>
        </div>
        <div className="service-box">
          <img
            alt=""
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/home-service-website-desing.png"
            className="service-image"
          />
          <div className="service-heading">Website Design</div>
          <div>
            <span className="service-read-more">
              Read More
              <ArrowForwardIcon className="service-read-more-arrow" />
            </span>
          </div>
        </div>
        <div className="service-box">
          <img
            alt=""
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/eCommerce.png"
            className="service-image"
          />
          <div className="service-heading">E-Commerce</div>
          <div>
            <span className="service-read-more">
              Read More
              <ArrowForwardIcon className="service-read-more-arrow" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
