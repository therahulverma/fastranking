import "../styles/Contact.css";

export default function Contact({ isHoveredServices, setIsHoveredServices }) {
  return (
    <div
      className="section contact-section "
      onMouseLeave={() => setIsHoveredServices(false)}
      onMouseEnter={() => setIsHoveredServices(false)}
    >
      <p className="contact-description">
        Fast Ranking is here to help you establish a strong online presence that
        engages your audience and drives your business forward. Contact us today
        to get started on building your basic website with our expert team.
      </p>
      <div className="contact-us-container">
        <span className="contact-us">Contact Us Now</span>
      </div>
    </div>
  );
}
