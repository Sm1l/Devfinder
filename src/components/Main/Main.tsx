import React from "react";

import styles from "./Main.module.scss";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return <div className={styles.main}>Main Component</div>;
};

export { Main };
