import React from "react";

import styles from "./UserCard.module.scss";
import { UserStat } from "../UserStat";
import { ILocalUser } from "../../interfaces";
import { UserTitle } from "../UserTitle";
import { UserInfo } from "../UserInfo";

interface UserCardProps extends ILocalUser {}

const UserCard: React.FC<UserCardProps> = (props) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.name} className={styles.avatar}></img>
      <UserTitle created={props.created} name={props.name} login={props.login} />
      <p className={`${styles.bio} ${props.bio ? "" : ` ${styles.empty}`}`}>{props.bio || "This profile has no bio"}</p>
      <UserStat repos={props.repos} followers={props.followers} following={props.following} />
      <UserInfo company={props.company} blog={props.blog} location={props.location} twitter={props.twitter} />
    </div>
  );
};

export { UserCard };
