import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import imageLogin from "../../images/login-image.svg";
import FormText from "../../components/FormText";

export const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let isAuth = false; //JSON.parse(localStorage.getItem("user"));
    if (isAuth) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="p-10 grid overflow-hidden rounded-lg min-h-[calc(100vh_-_40px_*_2)] grid-cols-[auto] lg:grid-cols-2 font-roboto">
        <div className="lg:flex lg:justify-center hidden">
          <img src={imageLogin} alt="login" className="w-[80%]" />
        </div>
        <div className="flex flex-col justify-center  md:pl-14 xl:pl-[150px]">
          <div className="mb-14">
            <h1 className="font-bold text-[40px] mb-[10px]">
              Welcome to Our Application
            </h1>
            <p className="opacity-[.7]">Please Login to use this platform</p>
          </div>
          <form className="md:w-full md:gap-[15px] xl:w-[450px]">
            <div className="flex flex-col gap-[35px] justify-center">
              <FormText
                form={{
                  htmlFor: "email",
                  label: "Email",
                  type: "email",
                  name: "userEmail",
                }}
              />

              <FormText
                form={{
                  htmlFor: "password",
                  label: "Password",
                  type: "password",
                  name: "userPassword",
                }}
              />

              <button
                type="submit"
                className="border-none bg-gradient-to-r from-cyan-500 to-blue-500 text-white btn uppercase text-lg cursor-pointer">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
