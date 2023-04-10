import AboutMeSection from "../AboutMeSection";
import CompletedCoursesSection from "../CompletedCoursesSection";
import ContactsSection from "../ContactsSection";
import EducationSection from "../EducationSection";
import ExperienceSection from "../ExperienceSection";
import GallerySection from "../GallerySection";
import JobExamplesSection from "../JobExamplesSection";
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
      <JobExamplesSection />
      <CompletedCoursesSection />
      <ContactsSection />
    </main>
  )
}

export default Main;
