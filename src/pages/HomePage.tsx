import AboutSection from "../components/homePage/AboutSection";
import MainSection from "../components/homePage/MainSection";
import ProjectsSection from "../components/homePage/ProjectsSection";
import TechSection from "../components/homePage/TechSection";

export const HomePage = () => {
  return (
    <>
      <section>
        <MainSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <ProjectsSection />
      </section>
      <section>
        <TechSection />
      </section>
    </>
  );
};
