import "../styles/Footer.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer({ isHoveredServices, setIsHoveredServices }) {
  return (
    <>
      <div
        className="section footer-1"
        onMouseLeave={() => setIsHoveredServices(false)}
        onMouseEnter={() => setIsHoveredServices(false)}
      >
        <div className="footer-1-card">
          <div className="footer-1-card-heading">
            <span>Address</span>
          </div>
          <p className="address-details">
            Future House The Moakes, Luton LU3 3QB, UK
          </p>
          <p className="address-email">
            <EmailIcon fontSize="50px" className="address-email-icon" />{" "}
            info@fastranking.co.uk
          </p>
          <p className="address-contact">
            <CallIcon className="address-contact-icon" /> 030 0373 0001
          </p>
        </div>
        <div className="footer-1-card">
          <div className="footer-1-card-heading">
            <span>Links</span>
          </div>
          <p className="links-tab">About Us</p>
          <p className="links-tab">Contact Us</p>
        </div>
        <div className="footer-1-card">
          <div className="footer-1-card-heading">
            <span>Services</span>
          </div>
          <p className="links-tab">{`Search Engine Optimisation (SEO)`}</p>
          <p className="links-tab">Social Media Optimisation</p>
          <p className="links-tab">Content Marketing Services</p>
          <p className="links-tab">Web Development</p>
        </div>
        <div className="footer-1-card">
          <div className="footer-1-card-heading">
            <span>Social Links</span>
          </div>
          <div className="social-links-icons">
            <img
              className="social-links-image"
              alt=""
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/Facebook-social.png"
            />
            <img
              className="social-links-image"
              alt=""
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/instagram-social.png"
            />
            <img
              className="social-links-image"
              alt=""
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/linkedin-social.png"
            />
            <img
              className="social-links-image"
              alt=""
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/twitter-X.png"
            />
            <img
              className="social-links-image"
              alt=""
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/youtube-social.png"
            />
          </div>
          <p className="social-links-description">
            <strong>
              Are You Struggling to Rank Higher on Google? Get a Free Audit
              Today
            </strong>
          </p>
          <div className="social-link-email-container">
            <input
              type="text"
              className="social-link-input"
              name="email"
              id="email"
              placeholder="Email"
            />
            <button className="social-link-submit">Submit</button>
          </div>
        </div>
      </div>
      <div
        className="footer-2"
        onMouseLeave={() => setIsHoveredServices(false)}
        onMouseEnter={() => setIsHoveredServices(false)}
      >
        <p className="footer-end-left">
          © 2023. All Rights Reserved. Powered By Fast Ranking.{" "}
        </p>
        <p className="footer-end-right">
          <span>Privacy Policy</span> | <span>Terms & Conditions</span>
        </p>
      </div>
    </>
  );
}
