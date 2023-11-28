import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { getToken, saveUser } from "../../api/auth";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const { loading, signIn, signInWithGoogle } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);

      await getToken(result?.user?.email);
      toast.success("Sign in successful");
      navigate(from, { replace: true });
    } catch (e) {
      console.log(e);
      toast.success(e?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();

      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);

      await getToken(result?.user?.email);
      toast.success("Sign up successful");
      navigate(from, { replace: true });
    } catch (e) {
      console.log(e);
      toast.success(e?.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 text-gray-900 bg-gray-100 rounded-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={submitHandler}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="mb-2 text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-green-500 rounded-md"
            >
              {loading ? (
                <TbFidgetSpinner className="m-auto animate-spin" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs text-gray-400 hover:underline hover:text-green-500">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center p-2 m-3 space-x-2 border border-gray-300 cursor-pointer border-rounded"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/signup"
            className="text-gray-600 hover:underline hover:text-rose-500"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
