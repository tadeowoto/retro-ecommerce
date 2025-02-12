import { useRoutes, BrowserRouter } from "react-router-dom";
import { EcommerceContextProvider } from "../../context/context";
import { UserAuthProvider } from "../../context/userAuth";
import Home from "../home";
import MyAccount from "../myAccount";
import MyOrders from "../myOrders";
import NotFound from "../notFound";
import SignIn from "../signIn";
import Navbar from "../../components/Navbar";
import HistoryOrders from "../../HistoryOrders";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "clothes",
      element: <Home />,
    },
    {
      path: "electronics",
      element: <Home />,
    },
    {
      path: "fornitures",
      element: <Home />,
    },
    {
      path: "toys",
      element: <Home />,
    },
    {
      path: "others",
      element: <Home />,
    },
    {
      path: "all",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders",
      element: <HistoryOrders />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/my-orders/last",
      element: <MyOrders />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrders />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <UserAuthProvider>
      <EcommerceContextProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
              <AppRoutes />
            </main>
          </div>
        </BrowserRouter>
      </EcommerceContextProvider>
    </UserAuthProvider>
  );
}

export default App;
