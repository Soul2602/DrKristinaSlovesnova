import AboutMeSection from "../AboutMeSection";
import ContactsSection from "../ContactsSection";
import EducationSection from "../EducationSection";
import ExperienceSection from "../ExperienceSection";
import GallerySection from "../GallerySection";
import SkillsSection from "../SkillsSection";
import TopSection from "../TopSection";

function Main() {
  return (
    <main className="app-main">
      <TopSection />
      <AboutMeSection />
      <GallerySection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ContactsSection />
    </main>
  )
}

export default Main;
