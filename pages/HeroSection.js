import { useTheme } from "../ThemeContext";

export default function HeroSection() {
  const { state } = useTheme();

  const fontSizeStyles = {
    small: "text-2xl",
    medium: "text-4xl",
    large: "text-6xl",
  };
  console.log(state);
  console.log(state.userPreferences.fontSize);
  console.log(fontSizeStyles[state.userPreferences.fontSize]);
  return (
    <section
      className={`bg-gray-100 dark:bg-gray-800 p-8 ${
        fontSizeStyles[state.userPreferences.fontSize]
      }`}
    >
      <h1 className=" font-bold">
        {state.theme === "light" ? "Light" : "Dark"} Theme Portfolio
      </h1>
      <p className="text-lg mt-4">
        I am passionately looking for web development job opportunity in a
        company where I can apply my skills and education as well as learn new
        technologies. I really enjoy problem solving, finding bugs, reading
        code, understanding logic and I am always ready to face challenges.
      </p>
    </section>
  );
}
