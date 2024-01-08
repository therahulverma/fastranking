import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "../styles/ServicesContentFirst.css";

export default function ServicesContentFirst({
  isHoveredServices,
  setIsHoveredServices,
}) {
  return (
    <div
      className="service-content-first-container"
      onMouseLeave={() => setIsHoveredServices(false)}
      onMouseEnter={() => setIsHoveredServices(false)}
    >
      <div className="service-content-first-container-content">
        <div className="service-content-first-container-heading">
          Ignite Your Online Visibility with SEO-Optimized Content by Fast
          Ranking.
        </div>
        <div className="service-content-first-container-details">
          <p>
            Choose Fast Ranking as your trusted partner for content marketing.
            We are dedicated to helping you create captivating content that
            drives results, enhances your brand's visibility, and connects you
            with your target audience in meaningful ways. Contact us today to
            take your content marketing efforts to new heights.
          </p>
        </div>
        <div className="service-content-first-container-point">
          <div className="first-content-points">
            <ArrowRightAltIcon />
            High-Quality Content
          </div>
          <div className="first-content-points">
            <ArrowRightAltIcon />
            High-Quality Content
          </div>
          <div className="first-content-points">
            <ArrowRightAltIcon />
            High-Quality Content
          </div>
          <div className="first-content-points">
            <ArrowRightAltIcon />
            High-Quality Content
          </div>
          <div className="first-content-points">
            <ArrowRightAltIcon />
            High-Quality Content
          </div>
          <div className="first-content-points">
            <ArrowRightAltIcon />
            High-Quality Content
          </div>
        </div>
      </div>
      <div className="service-content-first-container-image">
        <img
          className="content-first-image"
          alt=""
          src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/Content-Marketing-Services.png"
        />
      </div>
    </div>
  );
}
