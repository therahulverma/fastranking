import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import ServicesContentFirst from "./ServicesContentFirst";
import ServicesContentSecond from "./ServicesContentSecond";
export default function Service({ isHoveredServices, setIsHoveredServices }) {
  return (
    <>
      {" "}
      <Header
        isHoveredServices={isHoveredServices}
        setIsHoveredServices={setIsHoveredServices}
      />
      <ServicesContentFirst
        isHoveredServices={isHoveredServices}
        setIsHoveredServices={setIsHoveredServices}
      />
      <ServicesContentSecond
        isHoveredServices={isHoveredServices}
        setIsHoveredServices={setIsHoveredServices}
      />
      <Clients
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
