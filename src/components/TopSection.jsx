import "../styles/TopSection.css";
export default function TopSection({
  isHoveredServices,
  setIsHoveredServices,
}) {
  return (
    <div
      className="section-1"
      onMouseLeave={() => setIsHoveredServices(false)}
      onMouseEnter={() => setIsHoveredServices(false)}
    >
      <div className="section-1-image">
        <div className="section-1-image-container">
          <img
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/circle-big.png"
            alt=""
            className="big-circle"
          />
          <img
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/circle.webp"
            alt=""
            className="circle"
          />
          <img
            src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/fast-banner-icon.webp"
            alt=""
            className="centre-image"
          />
        </div>
      </div>
      <div className="section-1-content">
        <span className="small-title" style={{ color: "#ffffff" }}>
          AWESOME
        </span>
        <span className="large-title" style={{ color: "#000" }}>
          Creativity,
          <span className="small-title" style={{ color: "#000" }}>
            BETTER
          </span>
        </span>
        <span className="large-title" style={{ color: "#ffffff" }}>
          Functionality,
        </span>
        <span className="small-title" style={{ color: "#ffffff" }}>
          & GREAT{" "}
          <span className="mid-title" style={{ color: "#000" }}>
            Performance.
          </span>
        </span>
      </div>
    </div>
  );
}
