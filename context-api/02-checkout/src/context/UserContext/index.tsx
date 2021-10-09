import { createContext, useState, useContext, useReducer } from "react";
import {
  initialState,
  ReducerAction,
  ReducerState,
  userReducer,
} from "./reducer";

interface IUserContext {
  state: ReducerState;
  dispatch(action: ReducerAction): void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      "Ops, você esqueceu de colocar o provider por volta da app!"
    );
  }

  return context;
};
