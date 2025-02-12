import MainLayout from "../../components/MainLayout";
import { useState } from "react";
import "./signin.css";

const SignIn = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <MainLayout>
      <div className="w-full signin-container flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold font-nunito mb-10">Welcome</h1>

        {!showForm ? (
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setShowForm(true)}
              className=" bg-greenMain flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer"
            >
              Log in
            </button>
            <button className=" bg-blueMain flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer">
              Sign up
            </button>
            <a href="/">forgot password</a>
          </div>
        ) : (
          <form
            onSubmit={() => console.log("enviando")}
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
                className="border-2 border-border rounded-md shadow-[3px_3px_0_#333] p-2"
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
                className="border-2 border-border rounded-md shadow-[3px_3px_0_#333] p-2"
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
                name="password"
                className="border-2 border-border rounded-md shadow-[3px_3px_0_#333] p-2"
              />
            </div>
            <div className="flex gap-2 mt-4">
              <button
                type="submit"
                className="bg-blueMain flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer"
              >
                Enviar
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
    </MainLayout>
  );
};

export default SignIn;
