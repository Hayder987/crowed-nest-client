import { Link } from "react-router";
import background from "../assets/background-1.jpg";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    return (
        <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[70vh] lg:min-h-[90vh] p-4 md:p-8 lg:p-20 flex justify-center items-center"
    >
      <div className="min-w-[100%] lg:min-w-[600px] rounded-xl bg-opacity-40 hover:bg-opacity-60 bg-[#010716] py-12 md:py-20 px-16 mx-auto mb-16">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">Login</h1>
        <p className="text-center text-red-600 mb-4">fdshfdkjhfjd</p>
        <form className="flex flex-col gap-10">
          
          <div className="">
            <label className="label">
              <span className="text-white">Email</span>
            </label>
            <input
              type="email"
              name="Email"
              id=""
              className="border-b-2 border-white bg-transparent w-full outline-none text-white"
            />
          </div>
          
          <div className="">
            <label className="label">
              <span className="text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id=""
              className="border-b-2 border-white bg-transparent w-full outline-none text-white"
            />
          </div>
          <div className="flex justify-center items-center bg-[#ff5103] rounded-full text-white py-3 px-6">
            <input type="submit" value="Register Now" />
          </div>
          
        </form>
        <div className="flex justify-center items-center">
            <button className="border-2 border-[#ff5103] mt-12 py-2 p-6 rounded-full w-full text-white flex justify-center items-center gap-4">
                <span className="text-2xl"><FcGoogle /></span>
                <span className="text-xl font-semibold">Sign With Google</span>
            </button>
        </div>
        <div className="">
            <p className="text-white text-center pt-6">Don't Have an Account? <Link to='/register'><span className="text-blue-500 underline"> Register Now</span></Link></p>
        </div>
      </div>
    </div>
    );
};

export default LoginPage;