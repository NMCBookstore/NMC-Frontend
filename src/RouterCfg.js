import { lazy } from "react";
import Home from "./components/Home/Home";

/**** User Layouts *****/
const Layout = lazy(() => import("./layouts/FullLayout/Layout"));
const Role = lazy(() => import("./features/auth/role"));

/**** Admin Layouts *****/
const AdminLayout = lazy(() => import("./layoutAdmin/AdminLayout"));

/**** Protected User Routes *****/
const RequireAuth = lazy(() => import("./features/auth/requireAuth"));

/**** User Routes *****/
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
const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));
const Error404 = lazy(() => import("./components/Error404"));

/**** Admin Routes *****/
const AdminDashboard = lazy(() => import("./views/Admin/AdminDashboard"));
const BookManagement = lazy(() => import("./views/Admin/BookManagement"));
const GenresManagement = lazy(() => import("./views/Admin/GenresManagement"));
const EditBook = lazy(() => import("./views/Admin/EditBook"));
const DetailsBookManagement = lazy(() =>
  import("./views/Admin/DetailsBookManagement")
);
const DetailsGenresManagement = lazy(() =>
  import("./views/Admin/DetailsGenresManagement")
);
const DetailsSubGenresManagement = lazy(() =>
  import("./views/Admin/DetailsSubGenresManagement")
);
const OrderManagement = lazy(() => import("./views/Admin/OrderManagement"));
const CreateNewBook = lazy(() =>
  import("./views/Admin/DetailsBookManagement/CreateNewBook")
);

/**** 404 page *****/
const ErrorNotFound404 = { path: "*", element: <Error404 /> };

const RouterCfg = [
  { path: "login", element: <UserLogin /> },
  { path: "register", element: <UserRegister /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "search-filter", element: <SearchFilter /> },
      { path: "reset_password", element: <ResetPassword /> },
      { path: "forgot_password", element: <ForgotPassword /> },
      // { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      ErrorNotFound404,
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
          {
            path: "profile",
            children: [
              {
                path: "",
                element: <UserProfile id={0} />,
              },
              {
                path: "change-password",
                element: <UserProfile id={1} />,
              },
              {
                path: "address",
                element: <UserProfile id={2} />,
              },
              {
                path: "my-order",
                children: [
                  {
                    path: "",
                    element: <UserProfile id={3} idOrder={0} />,
                  },
                  {
                    path: "ordered",
                    element: <UserProfile id={3} idOrder={1} />,
                  },
                  // {
                  //   path: "shipping",
                  //   element: <UserProfile id={3} idOrder={2} />,
                  // },
                  // {
                  //   path: "completed",
                  //   element: <UserProfile id={3} idOrder={3} />,
                  // },
                  // {
                  //   path: "cancellations",
                  //   element: <UserProfile id={3} idOrder={4} />,
                  // },
                ],
              },
            ],
          },
          { path: "wishlist", element: <UserWishlist /> },
          { path: "checkout", element: <UserCheckout /> },
          ErrorNotFound404,
        ],
      },
    ],
  },

  {
    path: "/admin",
    element: <Role />, //whether is admin or not
    children: [
      {
        //protected route
        element: <RequireAuth />,
        children: [
          { path: "dashboard", element: <AdminDashboard /> },
          { path: "manage-book", element: <BookManagement /> },
          { path: "manage-genres", element: <GenresManagement /> },
          { path: "manage-order", element: <OrderManagement /> },
          { path: "edit-book", element: <EditBook /> },
          { path: "details-book/:id", element: <DetailsBookManagement /> },
          { path: "details-genres/:id", element: <DetailsGenresManagement /> },
          {
            path: "details-subgenres/:id",
            element: <DetailsSubGenresManagement />,
          },
          { path: "create-book", element: <CreateNewBook /> },
          ErrorNotFound404,
        ],
      },
    ],
  },
];

export default RouterCfg;
