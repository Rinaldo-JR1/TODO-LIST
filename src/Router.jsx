import { Route, Routes } from "react-router-dom";
import { Error404, Inicial, Sobre } from "./pages";
import { LayoutPadrao } from "./Layouts";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Inicial />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Route>
    </Routes>
  );
};
export { Router };
