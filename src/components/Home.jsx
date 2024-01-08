import Agency from "./Agency";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import OurServices from "./OurServices";
import Partners from "./Partners";
import TopSection from "./TopSection";

export default function Home({ isHoveredServices, setIsHoveredServices }) {
  return (
    <>
      <Header
        isHoveredServices={isHoveredServices}
        setIsHoveredServices={setIsHoveredServices}
      />
      <TopSection
        isHoveredServices={isHoveredServices}
        setIsHoveredServices={setIsHoveredServices}
      />
      <Agency
        isHoveredServices={isHoveredServices}
        setIsHoveredServices={setIsHoveredServices}
      />
      <OurServices
        isHoveredServices={isHoveredServices}
        setIsHoveredServices={setIsHoveredServices}
      />
      <Clients
        isHoveredServices={isHoveredServices}
        setIsHoveredServices={setIsHoveredServices}
      />
      <Partners
        isHoveredServices={isHoveredServices}
        setIsHoveredServices={setIsHoveredServices}
      />
      <Contact
        isHoveredServices={isHoveredServices}
        setIsHoveredServices={setIsHoveredServices}
      />
      <Footer
        isHoveredServices={isHoveredServices}
        setIsHoveredServices={setIsHoveredServices}
      />
    </>
  );
}
