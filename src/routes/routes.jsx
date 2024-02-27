import { Routes, Route } from "react-router-dom";
import { HomePage, NotFound } from "../pages";

const AppRouter = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default AppRouter;
