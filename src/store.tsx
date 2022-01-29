import { createContext } from "react";

const initialState = {
  firstName: "Stacy",
  lastName: "Petrunina",
};

export type UserState = typeof initialState;
export const UserContext = createContext<typeof initialState>(initialState);
