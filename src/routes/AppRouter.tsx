import DefaultLayout from "@/layout/default/DefaultLayout";
import HomePage from "@/pages/home/HomePage";

import { Outlet, Route, Routes } from "react-router-dom";
import PSW001 from "@/pages/passwords/PSW001/PSW001";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/passwords" element={<Outlet />}>
            <Route path="/passwords/PSW001" element={<PSW001 />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
