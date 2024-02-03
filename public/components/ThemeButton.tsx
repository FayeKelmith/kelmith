import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={() => handleClick()}></button>;
};

export default ThemeChanger;
