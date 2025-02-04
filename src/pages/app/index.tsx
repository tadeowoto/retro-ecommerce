import { useRoutes, BrowserRouter } from "react-router-dom";
import { EcommerceContextProvider } from "../../context/context";
import Home from "../home";
import MyAccount from "../myAccount";
import MyOrders from "../myOrders";
import NotFound from "../notFound";
import SignIn from "../signIn";
import Navbar from "../../components/Navbar";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
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
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

function App() {
  return (
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
  );
}

export default App;
