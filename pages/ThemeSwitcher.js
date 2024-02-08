import { useTheme } from "../ThemeContext";

export default function ThemeSwitcher() {
  const { state, dispatch } = useTheme();

  function TOGGLE_THEME() {
    dispatch({
      type: "TOGGLE_THEME",
      theme: state.theme === "light" ? "dark" : "light",
    });
  }

  function setFontSize(fontSize) {
    dispatch({ type: "SET_FONT_SIZE", fontSize });
  }
  function toggleAnimations() {
    dispatch({ type: "TOGGLE_ANIMATIONS" });
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        className="text-blue-500 dark:text-blue-400"
        onClick={TOGGLE_THEME}
      >
        {state.theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
      <div className="flex items-center space-x-2">
        <label className="text-gray-600 dark:text-gray-400">Font Size:</label>

        <select
          value={state.userPreferences.fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="border p-1 rounded dark:bg-gray-700"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="reduceAnimations"
          checked={state.userPreferences.reduceAnimations}
          onChange={toggleAnimations}
          className="mr-2"
        />
        <label
          htmlFor="reduceAnimations"
          className="text-gray-600 dark:text-gray-400"
        >
          Reduce Animations
        </label>
      </div>
    </div>
  );
}
