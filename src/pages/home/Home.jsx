import HeroDescription from "../../sections/hero-section/Hero";
import ProjectDescription from "../../sections/project-description/ProjectDescription";
import Interaction from "../../sections/interaction/Interaction";
import ContactUs from "../../sections/contact-us/ContactUs";

function Home() {
  return (
    <>
      <HeroDescription/>
      <ProjectDescription />
      <Interaction />
      <ContactUs />
    </>
  );
}

export default Home;