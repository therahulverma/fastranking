import "../styles/ServicesContentSecond.css";
export default function ServicesContentSecond({ setIsHoveredServices }) {
  return (
    <div
      className="service-content-second-container"
      onMouseLeave={() => setIsHoveredServices(false)}
      onMouseEnter={() => setIsHoveredServices(false)}
    >
      <div className="service-content-second-heading">
        Our Content Marketing Services
      </div>
      <div className="service-content-second-cards-container">
        <div className="service-content-second-card">
          <div className="service-content-second-image-container">
            <img
              className="service-content-second-image"
              alt=""
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/SEO-Content-Writing.png"
            />
          </div>
          <div className="service-content-second-card-heading">
            SEO Content Writing
          </div>
          <div className="service-content-second-details">
            At Fast Ranking, we understand the critical role that quality
            content plays in improving your search engine rankings and
            attracting targeted organic traffic. Our team of experienced SEO
            content writers is well-versed in creating engaging, informative,
            and keyword-rich content that captivates readers and boosts your
            online presence.
          </div>
        </div>
        <div className="service-content-second-card">
          <div className="service-content-second-image-container">
            <img
              className="service-content-second-image"
              alt=""
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/SMO-Content-Writing.png"
            />
          </div>
          <div className="service-content-second-card-heading">
            SMO Content Writing
          </div>
          <div className="service-content-second-details">
            {`Social media platforms have become powerful tools for businesses to
            connect with their target audience and build brand awareness. At
            Fast Ranking, we offer SMO (Social Media Optimization) content
            writing services that help you effectively engage your social media
            followers and drive meaningful interactions.`}
          </div>
        </div>
        <div className="service-content-second-card">
          <div className="service-content-second-image-container">
            <img
              className="service-content-second-image"
              alt=""
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/Blog-Content-Writing.png"
            />
          </div>
          <div className="service-content-second-card-heading">
            Blog Content Writing
          </div>
          <div className="service-content-second-details">
            Blogging is a powerful tool for attracting and engaging your target
            audience while establishing your brand as a thought leader in your
            industry. Fast Ranking's blog content writing services provide you
            with high-quality, well-researched, and insightful blog articles
            that captivate readers and drive organic traffic to your website.
          </div>
        </div>
        <div className="service-content-second-card">
          <div className="service-content-second-image-container">
            <img
              className="service-content-second-image"
              alt=""
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/Guest-Posting-Content.png"
            />
          </div>
          <div className="service-content-second-card-heading">
            Guest Posting Content
          </div>
          <div className="service-content-second-details">
            Guest posting is a highly effective strategy for expanding your
            online presence, increasing brand awareness, and driving valuable
            traffic to your website. Fast Ranking's guest posting content
            services connect you with influential websites and blogs in your
            industry, allowing you to showcase your expertise to a wider
            audience.
          </div>
        </div>
        <div className="service-content-second-card">
          <div className="service-content-second-image-container">
            <img
              className="service-content-second-image"
              alt=""
              src="https://www.fastranking.co.uk/wp-content/themes/fastranking/img/Content-Distribution.png"
            />
          </div>
          <div className="service-content-second-card-heading">
            Content Distribution
          </div>
          <div className="service-content-second-details">
            Creating exceptional content is just the first step. Effective
            content distribution is crucial to ensure your message reaches your
            target audience and drives the desired actions. Fast Ranking's
            content distribution services focus on reaching the right people at
            the right time, amplifying your content's impact and generating
            meaningful results.
          </div>
        </div>
      </div>
    </div>
  );
}
