import "../styles/ServicesHead.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
export default function ServicesHead(props) {
  return (
    <div className="service-head-container">
      <img
        className="service-head-image"
        alt=""
        src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/content-writing-header.jpg"
      />
      <div className="service-head-heading-container">
        <div className="service-head-heading">CONTENT MARKETING SERVICES</div>
        <div className="service-head-subheading">
          <span>Home</span>
          <KeyboardDoubleArrowRightIcon style={{ color: "#6e01eb" }} />
          <span>Content Marketing Services</span>
        </div>
      </div>
    </div>
  );
}
