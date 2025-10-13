import React from "react";
import type { AuthAction } from "../reducers/authReducer";

interface AuthContextType {
  user: string;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
