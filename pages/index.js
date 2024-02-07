import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../ThemeContext";

export default function Home() {
  // const { state } = useTheme();

  return (
    <div
      className={"bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"}
    >
      <ThemeSwitcher />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
