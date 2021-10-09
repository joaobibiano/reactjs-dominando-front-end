import { createContext, useState, useContext } from "react";

interface IUserContext {
  name: string;
  updateUserName(name: string): void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState({
    name: "Outro nome",
  });

  function updateUserName(name: string) {
    if (name === "joao") {
      setUser({
        name: "Proibido",
      });
      return;
    }

    setUser({
      name: name,
    });
  }

  return (
    <UserContext.Provider value={{ ...user, updateUserName }}>
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
