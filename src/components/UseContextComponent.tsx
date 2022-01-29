import { useState, useContext } from "react";

import { UserContext, UserState } from "../store";

function ConsumerContext() {
  const user = useContext<UserState>(UserContext);

  return (
    <>
      <div>First name: {user.firstName}</div>
      <div>Last name: {user.lastName}</div>
    </>
  );
}

export default function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    firstName: "Stacy",
    lastName: "Petrunina",
  });
  return (
    <>
      <UserContext.Provider value={user}>
        <ConsumerContext />
        <button
          onClick={() => setUser({ firstName: "Maria", lastName: "Smith" })}
        >
          Change user
        </button>
      </UserContext.Provider>
    </>
  );
}
