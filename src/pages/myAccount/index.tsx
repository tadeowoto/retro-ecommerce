import MainLayout from "../../components/MainLayout";
import { useContext } from "react";
import { userAuthContext } from "../../context/userAuth";
import "./account.css";

const MyAccount = () => {
  const { name, userEmail, password } = useContext(userAuthContext);

  return (
    <MainLayout>
      <div className="account-container w-full flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold font-nunito mb-10">My Account</h1>
        <p className="text-text font-nunito">Name {` ${name}`}</p>
        <p className="text-text font-nunito">Email {` ${userEmail}`}</p>
        <p className="text-text font-nunito">Password {` ${password}`}</p>
      </div>
    </MainLayout>
  );
};

export default MyAccount;
