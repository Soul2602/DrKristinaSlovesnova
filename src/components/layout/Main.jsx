import AboutMeSection from "../AboutMeSection";
import EducationSection from "../EducationSection";
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
    </main>
  )
}

export default Main;
