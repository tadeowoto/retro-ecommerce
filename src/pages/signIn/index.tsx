import MainLayout from "../../components/MainLayout";
import { useContext, useState } from "react";
import "./signin.css";
import { userAuthContext } from "../../context/userAuth";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showForm, setShowForm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const {
    setName,
    setPassword,
    handleSubmitCreateUser,
    setUserEmail,
    userEmail,
    name,
    password,
    isLoggedIn,
    setIsLoggedIn,
    handleSubmitLogin,
    setLoginEmail,
    setLoginPassword,
    loginEmail,
    loginPassword,
  } = useContext(userAuthContext);

  const showUiLoggued = () => {
    if (isLoggedIn) {
      return (
        <div className="w-full signin-container flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold font-nunito mb-10">
            Welcome {name}
          </h1>
          <div className="flex flex-col gap-4">
            <Link to="/">
              <button className=" bg-greenMain flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer">
                Go to Home
              </button>
            </Link>
            <Link to="/my-account">
              <button className=" bg-blueMain flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer">
                My account
              </button>
            </Link>
            <Link to="/">
              <button
                onClick={() => setIsLoggedIn(false)}
                className=" bg-grayBg flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer"
              >
                Sign out
              </button>
            </Link>
            <a
              href="https://www.youtube.com/watch?v=xsvZOUnXdWM"
              target="_blank"
            >
              forgot password
            </a>
          </div>
        </div>
      );
    }
  };

  const showUiNotLogged = () => {
    return (
      <div className="w-full signin-container flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold font-nunito mb-10">Welcome</h1>

        {!showForm && !showLogin ? (
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setShowLogin(true)}
              className=" bg-greenMain flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer"
            >
              Log in
            </button>
            <button
              onClick={() => setShowForm(true)}
              className=" bg-blueMain flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer"
            >
              Sign up
            </button>
            <a href="/">forgot password</a>
          </div>
        ) : showLogin ? (
          <form
            onSubmit={handleSubmitLogin}
            className="flex flex-col gap-4 w-64 font-nunito"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-text font-semibold tracking-wider text-lg"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginEmail}
                className="border-2 border-border rounded-md shadow-[3px_3px_0_#333] p-2"
                onChange={(event) => setLoginEmail(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-text font-semibold tracking-wider text-lg"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={loginPassword}
                name="password"
                className="border-2 border-border rounded-md shadow-[3px_3px_0_#333] p-2"
                onChange={(event) => setLoginPassword(event.target.value)}
              />
            </div>
            <div className="flex gap-2 mt-4">
              <button
                type="submit"
                className="bg-greenMain flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setShowLogin(false)}
                className="bg-grayBg flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <form
            onSubmit={handleSubmitCreateUser}
            className="flex flex-col gap-4 w-64 font-nunito"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-text font-semibold tracking-wider text-lg"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Your name"
                className="border-2 border-border rounded-md shadow-[3px_3px_0_#333] p-2"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-text font-semibold tracking-wider text-lg"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={userEmail}
                className="border-2 border-border rounded-md shadow-[3px_3px_0_#333] p-2"
                onChange={(event) => setUserEmail(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-text font-semibold tracking-wider text-lg"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                name="password"
                placeholder="Your password"
                className="border-2 border-border rounded-md shadow-[3px_3px_0_#333] p-2"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex gap-2 mt-4">
              <button
                type="submit"
                className="bg-blueMain flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer"
              >
                Create
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-grayBg flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>
    );
  };

  return (
    <MainLayout>{isLoggedIn ? showUiLoggued() : showUiNotLogged()}</MainLayout>
  );
};

export default SignIn;
