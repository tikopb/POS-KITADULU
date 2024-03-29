import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imageLogin from "../../images/login-image.png";
import FormText from "../../components/FormText";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedCurToken,
  apiFetchCredential,
  selectedCurLoading,
} from "../../store/authSlice";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passRef = useRef();
  const [usernameState, setUsernameState] = useState("Lisa");
  const [passwordState, setPasswordState] = useState("kiduPos");
  const [errorMsg, setErrorMsg] = useState("");
  const token = useSelector(selectedCurToken);
  const isLoading = useSelector(selectedCurLoading);

  //const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    let isAuth = token ? true : false; //JSON.parse(localStorage.getItem("user"));
    if (isAuth) {
      navigate("/");
    }

    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    if (usernameState && passwordState) setErrorMsg("");
  }, [usernameState, passwordState]);

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = { username: usernameState, password: passwordState };
    try {
      // console.log(loginHandlerSlice);
      dispatch(apiFetchCredential(data)).then((_) => {
        setUsernameState("");
        setPasswordState("");
        navigate("/");
      });
    } catch (error) {}
  };

  const usernameHandler = (e) => setUsernameState(e.target.value);
  const passwordHandler = (e) => setPasswordState(e.target.value);

  return (
    <div className='w-11/12 mx-auto grid content-center h-screen'>
      <div className='bg-white shadow-lg p-10 grid overflow-hidden rounded-lg grid-cols-[auto] lg:grid-cols-2 font-roboto'>
        <div className='lg:flex lg:justify-center hidden bg-gradient-to-r from-[#99AAE5] to-[#29DDDD] rounded-[15px]'>
          <img
            src={imageLogin}
            alt='login'
            className='w-[80%]'
          />
        </div>
        <div className='flex flex-col justify-center  md:pl-14 xl:pl-[150px]'>
          <div className='mb-14'>
            <h1 className='font-bold text-[40px] mb-[10px]'>
              Welcome to WIST POS
            </h1>
            <p className='opacity-[.7]'>Please Login to use this platform</p>
          </div>
          <form
            className='md:w-full md:gap-[15px] xl:w-[450px]'
            onSubmit={loginHandler}>
            <div className='flex flex-col gap-[35px] justify-center'>
              <FormText
                form={{
                  htmlFor: "username",
                  ref: usernameRef,
                  defaultValue: usernameState,
                  label: "Username",
                  type: "text",
                  name: "Username",
                }}
                onEventChange={usernameHandler}
              />

              <FormText
                form={{
                  htmlFor: "password",
                  label: "Password",
                  ref: passRef,
                  defaultValue: passwordState,
                  type: "password",
                  name: "userPassword",
                }}
                onEventChange={passwordHandler}
              />

              {!isLoading && (
                <button
                  type='submit'
                  className='border-none bg-gradient-to-r from-[#99AAE5] to-[#29DDDD] text-white btn uppercase text-lg cursor-pointer'>
                  Sign In
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
