import DefaultLayout from "@/layout/default/DefaultLayout";
import HomePage from "@/pages/home/HomePage";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
