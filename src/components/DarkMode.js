import { useState } from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";

export default function DarkMode() {
  const [themeMode, setThemeMode] = useState("light");

  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  // on recupere le thme de notre dernière visite dans le LS
  if (localStorage) {
    theme = localStorage.getItem("theme");
   
  }

  if (theme === lightTheme || darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  // Pas de useState ici pour comparer au LS
  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
    setThemeMode(theme);
  };

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    >
      {themeMode === "true" || theme === "light" ? (
        <Brightness2OutlinedIcon />
      ) : (
        <Brightness7Icon style={{ color: "white" }} />
      )}
    </button>
  );
}
