import { Route, Routes } from "react-router-dom";
import { DashboardRouteList } from "../hook/paths";
import type { DashboardRouteType } from "../types/DashboardRouteType";
const DashboardRoute = () => {
  return (
    <Routes>
      {DashboardRouteList.map((item: DashboardRouteType) => (
        <Route path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};
export default DashboardRoute;
