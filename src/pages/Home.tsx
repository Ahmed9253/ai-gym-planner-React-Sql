import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Landing from "../components/layout/Landing";

const Home = () => {
  const { user, isLoading } = useAuth();
  if (user && !isLoading) {
    return <Navigate to="/profile" replace />;
  }
  return <Landing />;
};

export default Home;
