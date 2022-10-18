import { useContext } from "react";
import { AuthContext } from "../contexts/JWTContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Контекст авторизации должен быть использован внутри AuthProvider");

  return context;
};

export default useAuth;
