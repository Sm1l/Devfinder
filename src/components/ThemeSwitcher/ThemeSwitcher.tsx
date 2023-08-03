import React, { useState, useEffect } from "react";

import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";

import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher: React.FC = () => {
  const [isDark, setDark] = useState<boolean>(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.themeSwitcher} onClick={() => setDark(!isDark)}>
      <span>{isDark ? "Dark" : "Light"}</span>
      {isDark ? <SunIcon className={styles.icon} /> : <MoonIcon className={styles.icon} />}
    </div>
  );
};

export { ThemeSwitcher };
