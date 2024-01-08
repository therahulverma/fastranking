import "../styles/Agency.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Agency({ isHoveredServices, setIsHoveredServices }) {
  return (
    <div
      className="section-agency"
      onMouseLeave={() => setIsHoveredServices(false)}
      onMouseEnter={() => setIsHoveredServices(false)}
    >
      <div className="section-agency-content">
        <span className="section-agency-content-heading">
          Digital Marketing Agency in UK
        </span>
        <span className="section-agency-content-subheading">
          Improve your Brand awareness, reputation & reviews.
        </span>
        <div className="section-agency-content-btn-container">
          <span className="consult-btn">
            Get a free consultation{" "}
            <ArrowForwardIcon className="section-agency-content-arrow" />
          </span>
        </div>
      </div>
      <div className="section-agency-image">
        <img
          alt=""
          src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/A-Icon.png"
          className="section-agency-center-image"
        />
        <img
          alt=""
          src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/google.png"
          className="section-agency-google-image"
        />
        <img
          alt=""
          src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/Instagram.png"
          className="section-agency-insta-image"
        />
        <img
          alt=""
          src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/facebook.png"
          className="section-agency-facebook-image"
        />
        <img
          alt=""
          src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/youtube.png"
          className="section-agency-youtube-image"
        />
        <img
          alt=""
          src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/Whatsapp-2.png"
          className="section-agency-whatsapp-image"
        />
        <img
          alt=""
          src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/twitter.png"
          className="section-agency-twitter-image"
        />
      </div>
    </div>
  );
}
