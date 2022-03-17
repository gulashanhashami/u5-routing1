import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./ProductsPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
export const AllRoutes = () => {
  return (
    <>
      <Navbar />
     <Routes>
      <Route path={"/"} element={<HomePage />}></Route>
      <Route path={"/products"} element={<ProductsPage />}></Route>
      <Route path={"/products/:id"} element={<ProductsDetailsPage />}></Route>
      </Routes>
      {/* Add Routes here */}
    </>
  );
};
