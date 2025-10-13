export type AuthAction =
  | { type: "LOGIN"; username: string }
  | { type: "LOGOUT" };

const authReducer = (user: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return user;
};

export default authReducer;
