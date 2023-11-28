import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { imageUpload } from "../../api/utils";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getToken, saveUser } from "../../api/auth";

import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

const SignUp = () => {
  const navigate = useNavigate();

  const { createUser, loading, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const image = form.image.files[0];

    try {
      const imageData = await imageUpload(image);
      const result = await createUser(email, password);
      await updateUserProfile(name, imageData?.data?.display_url);

      const dbResponse = await saveUser(result?.user);

      await getToken(result?.user?.email);
      toast.success("Sign up successful");
      navigate("/");
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
      navigate("/");
    } catch (e) {
      console.log(e);
      toast.success(e?.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 text-gray-900 bg-gray-100 rounded-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to Pollinate</p>
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
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
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
                autoComplete="new-password"
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
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
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
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-gray-600 hover:underline hover:text-rose-500"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
