import { Link, useLocation, useNavigate } from "react-router";
import background from "../assets/background-1.jpg";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  const {loginUser, googleUserLogin} = useContext(AuthContext)
  const [errMessage, setErrMessage] = useState(null)
  const upperCase = /^(?=.*[A-Z]).+$/;
  const lowerCase = /^(?=.*[a-z]).+$/;
  const navigate = useNavigate()
  const {state} = useLocation()
  const [eye, setEye] = useState(true)

  const loginHandler = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setErrMessage("")

    if(password.length<6){
      setErrMessage('Password must have 6 digits')
      return
    }
    if(!upperCase.test(password)){
      setErrMessage('Password must be 1 UpperCase')
      return
    }

    if(!lowerCase.test(password)){
      setErrMessage('Password must be 1 LowerCase')
      return
    }

    loginUser(email, password)
    .then(()=>{
     state? navigate(state): navigate('/')
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "User Login SuccessFully!",
        showConfirmButton: false,
        timer: 2000
      });   
    })
    .catch(err=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message} Password Or Email did't Match`,
      });  
    })

  }

  const googleLogin=()=>{
    googleUserLogin()
    .then(()=>{
      state? navigate(state): navigate('/')
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "User Login SuccessFully!",
        showConfirmButton: false,
        timer: 2000
      }); 
    })
    .catch(err=>{
      setErrMessage(err.message)
    })
  }


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
      <Helmet><title>Sign in || Crowed Nest</title></Helmet>
      <div className="min-w-[100%] relative lg:min-w-[600px] rounded-xl bg-opacity-40 hover:bg-opacity-60 bg-[#010716] py-12 md:py-20 px-16 mx-auto mb-16">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">Login</h1>
        <p className="text-center text-red-400 mb-4">{errMessage}</p>
        <form onSubmit={loginHandler} className="flex flex-col gap-10">
          
          <div className="">
            <label className="">
              <span className="text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              id=""
              className="border-b-2 p-2 border-white bg-transparent w-full outline-none text-white"
            />
          </div>
          
          <div className="">
            <label className="">
              <span className="text-white">Password</span>
            </label>
            <input
              type={`${eye?'password':'text'}`}
              name="password"
              id=""
              className="border-b-2 p-2 border-white bg-transparent w-full outline-none text-white"
            />
          </div>
          <div className="flex justify-center items-center bg-[#ff5103] rounded-full text-white py-3 px-6">
            <input type="submit" value="Login Now" className="w-full cursor-pointer"/>
          </div>
          
        </form>
        <p onClick={()=> setEye(!eye)} className="absolute top-[250px] lg:top-[280px] right-20">
          {
            eye?<span className="text-white text-xl"><FaEye /></span>:
            <span className="text-white text-xl"><FaEyeSlash /></span>
          }
        </p>
        <div className="flex justify-center items-center">
            <button onClick={googleLogin} className="border-2 border-[#ff5103] mt-12 py-2 p-6 rounded-full w-full text-white flex justify-center items-center gap-4">
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