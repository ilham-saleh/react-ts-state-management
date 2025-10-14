import { useReducer, type ReactNode } from "react";
import AuthContext from "./authContext";

export type AuthAction =
  | { type: "LOGIN"; username: string }
  | { type: "LOGOUT" };

const authReducer = (user: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return user;
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
