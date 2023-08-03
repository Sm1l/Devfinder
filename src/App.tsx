import React, { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";

import { userDefault } from "./mock";
import { ILocalUser, IUser, IUserError } from "./interfaces";
import { isIUser } from "./utils/typeguards";
import { extractLocalUser } from "./utils/extract-local-user";

const App: React.FC = () => {
  const [user, setUser] = useState<ILocalUser | null>(userDefault);
  const BASE_URL = "https://api.github.com/users/";

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user = (await res.json()) as IUser | IUserError;
    if (isIUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };
  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
};

export { App };
