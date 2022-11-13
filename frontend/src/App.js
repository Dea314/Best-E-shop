import { BrowserRouter, Routes, Route } from "react-router-dom";

// components:
import Header from "./components/Header";
import Footer from "./components/Footer";

//user components:
import RoutesWithUserChat from "./components/user/RoutesWithUserChat";

// publicly available pages:
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoutes from "./components/ProtectedRoutes";

// protected user pages:
import UserProfile from "./pages/user/UserProfile";
import UserOrders from "./pages/user/UserOrders";
import UserCartDetails from "./pages/user/UserCartDetails";
import UserOrderDetails from "./pages/user/UserOrderDetails";

// protected admin pages:
import AdminUsers from "./pages/admin/AdminUsers";
import AdminEditUser from "./pages/admin/AdminEditUser";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCreateProduct from "./pages/admin/AdminCreateProduct";
import AdminEditProduct from "./pages/admin/AdminEditProduct";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminOrderDetails from "./pages/admin/AdminOrderDetails";
import AdminChats from "./pages/admin/AdminChats";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route element={<RoutesWithUserChat />}>
          {/* publicly available routes: */}
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-list/:pageNumParam" element={<ProductList />} />
          <Route
            path="/product-list/category/:categoryName"
            element={<ProductList />}
          />
          <Route
            path="/product-list/category/:categoryName/:pageNumParam"
            element={<ProductList />}
          />
          <Route
            path="/product-list/search/:searchQuery"
            element={<ProductList />}
          />
          <Route
            path="/product-list/search/:searchQuery/:pageNumParam"
            element={<ProductList />}
          />
          <Route
            path="/product-list/category/:categoryName/search/:searchQuery"
            element={<ProductList />}
          />
          <Route
            path="/product-list/category/:categoryName/search/:searchQuery/:pageNumParam"
            element={<ProductList />}
          />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element="Page not exists 404" />
        </Route>
        {/* <Route path="/" component={HomePage} />  in previous versions of react-router-dom */}

        {/* user protected routes: */}
        <Route element={<ProtectedRoutes admin={false} />}>
          <Route path="/user" element={<UserProfile />} />
          <Route path="/user/my-orders" element={<UserOrders />} />
          <Route path="/user/cart-details" element={<UserCartDetails />} />
          <Route
            path="/user/order-details/:id"
            element={<UserOrderDetails />}
          />
        </Route>

        {/* admin protected routes: */}
        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/edit-user/:id" element={<AdminEditUser />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProduct />}
          />
          <Route
            path="/admin/edit-product/:id"
            element={<AdminEditProduct />}
          />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route
            path="/admin/order-details/:id"
            element={<AdminOrderDetails />}
          />
          <Route path="/admin/chats" element={<AdminChats />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
