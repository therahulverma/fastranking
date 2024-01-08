import "../styles/Partners.css";
import OwlCarouselNew from "./OwlCarousel";

export default function Partners({ isHoveredServices, setIsHoveredServices }) {
  return (
    <div
      className="section partner-section"
      onMouseLeave={() => setIsHoveredServices(false)}
      onMouseEnter={() => setIsHoveredServices(false)}
    >
      <div className="partner-heading">Partners</div>
      <div className="partner-image-slider-container">
        <OwlCarouselNew />
      </div>
    </div>
  );
}
