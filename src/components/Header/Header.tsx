import React from "react";

import styles from "./Header.module.scss";
import { ThemeSwitcher } from "../ThemeSwitcher";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>devfinder</h1>
      <ThemeSwitcher />
    </header>
  );
};

export { Header };
