import { useContext } from "react";
import AuthRoutes from "./routes/routes";
import DashboardRoute from "./routes/DashboardRoutes";
import { Context } from "./context/Context";

function App() {
  const { token } = useContext(Context);
  return token ? <DashboardRoute /> : <AuthRoutes />;
}

export default App;
