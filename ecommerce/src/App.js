import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutPage from "./page/layout-page";
import CartPage from "./page/cart-page";
import Homepage from "./page/homepage";
import LoginPage from "./page/login-page";
import ProductDetailPage from "./page/product-detail-page";
import SignUp from "./page/sign-up-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Homepage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="cart" element={<CartPage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<div>No route Found</div>} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// export const RouterConfig = [
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "cred",
//         element: <div>WElcoe credo</div>,
//       },
//       {
//         path: "hell",
//         element: <div>WElcoe to hell</div>,
//       },
//     ],
//   },
//   {
//     path: "/credo",
//     element: <div>Hello credo!</div>,
//   },
// ];
