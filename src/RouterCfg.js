import { lazy } from "react";
import Home from "./components/Home/Home";

/**** User Layouts*****/
const Layout = lazy(() => import("./layouts/FullLayout/Layout"));

/**** Admin Layouts*****/
const AdminLayout = lazy(() => import("./layoutAdmin/AdminLayout"));

/**** Protected User Routes*****/
const RequireAuth = lazy(() => import("./features/auth/requireAuth"));

/**** User Routes*****/
const About = lazy(() => import("./pages/About"));
const UserLogin = lazy(() => import("./views/User/UserLogin"));
const UserRegister = lazy(() => import("./views/User/UserRegister"));
const ProductDetails = lazy(() => import("./views/ProductDetails"));
const SearchFilter = lazy(() => import("./views/User/SearchFilter"));
const UserProfile = lazy(() => import("./views/User/UserProfile"));
const UserCart = lazy(() => import("./views/User/UserCart"));
const UserCheckout = lazy(() => import("./views/User/UserCheckout"));
const UserWishlist = lazy(() => import("./views/User/UserWishlist"));
const ForgotPassword = lazy(() => import("./views/User/ForgotPassword"));
const ResetPassword = lazy(() => import("./views/User/ResetPassword"));
const Welcome = lazy(() => import("./features/auth/Welcome"));

/**** Admin Routes*****/
const AdminDashboard = lazy(() => import("./views/Admin/AdminDashboard"));
const BookManagement = lazy(() => import("./views/Admin/BookManagement"));
const GenresManagement = lazy(() => import("./views/Admin/GenresManagement"));
const EditBook = lazy(() => import("./views/Admin/EditBook"));
const DetailsBookManagement = lazy(() =>import("./views/Admin/DetailsBookManagement"));
const DetailsGenresManagement = lazy(() =>  import("./views/Admin/DetailsGenresManagement"));
const DetailsSubGenresManagement = lazy(() => import("./views/Admin/DetailsSubGenresManagement"));
const OrderManagement = lazy(() => import("./views/Admin/OrderManagement"));


const RouterCfg = [

  { path: "login", element: <UserLogin /> },
  { path: "register", element: <UserRegister /> },

  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "search-filter", element: <SearchFilter /> },
      { path: "forgot_password", element: <ForgotPassword /> },
      { path: "reset_password", element: <ResetPassword /> },
    ],
  },

  {
    path: "/user",
    element: [<Layout />],
    children: [
      {
        // protected route
        element: <RequireAuth />,
        children: [
          { path: "welcome", element: <Welcome /> },
          { path: "cart", element: <UserCart /> },
          { path: "profile", element: <UserProfile /> },
          { path: "wishlist", element: <UserWishlist /> },
          { path: "checkout", element: <UserCheckout /> },
        ],
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "manage-book", element: <BookManagement /> },
      { path: "manage-genres", element: <GenresManagement /> },
      { path: "manage-order", element: <OrderManagement /> },
      { path: "edit-book", element: <EditBook /> },
      { path: "details-book", element: <DetailsBookManagement /> },
      { path: "details-genres/:id", element: <DetailsGenresManagement /> },
      { path: "details-subgenres/:id", element: <DetailsSubGenresManagement />},
    ],
  },
];

export default RouterCfg;

