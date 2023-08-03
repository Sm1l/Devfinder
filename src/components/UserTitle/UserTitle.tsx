import React from "react";

import styles from "./UserTitle.module.scss";
import { ILocalUser } from "../../interfaces";

interface UserTitleProps extends Pick<ILocalUser, "name" | "login" | "created"> {}

const UserTitle: React.FC<UserTitleProps> = ({ name, login, created }) => {
  let formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const joinedDate = formatter.format(new Date(created));
  console.log(joinedDate);

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};

export { UserTitle };
