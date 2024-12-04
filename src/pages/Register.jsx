import { Link, useNavigate } from "react-router";
import background from "../assets/background-1.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
     const {registerUser, updateUser} = useContext(AuthContext)
     const [errMessage, setErrMessage] = useState(null)
     const upperCase = /^(?=.*[A-Z]).+$/;
     const lowerCase = /^(?=.*[a-z]).+$/;
     const navigate = useNavigate()

    const registerHandler = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const imgPath = form.imgPath.value;
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

        registerUser(email, password)
        .then((x)=>{
          updateUser(name, imgPath)
          navigate('/')
          toast.success('User Registration successFully!')
          console.log(x)
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
      <div className="min-w-[100%] lg:min-w-[600px] rounded-xl bg-opacity-40 hover:bg-opacity-60 bg-[#010716] py-12 px-16 mx-auto mb-16">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">Register</h1>
        <p className="text-center text-red-400">{errMessage}</p>
        <form onSubmit={registerHandler} className="flex flex-col gap-10">
          <div className="">
            <label className="">
              <span className="text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              id=""
              required
              className="border-b-2 p-2 border-white bg-transparent w-full outline-none text-white"
            />
          </div>
          <div className="">
            <label className="">
              <span className="text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              id=""
              required
              className="border-b-2 p-2 border-white bg-transparent w-full outline-none text-white"
            />
          </div>
          <div className="">
            <label className="">
              <span className="text-white">PhotoUrl</span>
            </label>
            <input
              type="text"
              name="imgPath"
              id=""
              required
              className="border-b-2 p-2 border-white bg-transparent w-full outline-none text-white"
            />
          </div>
          <div className="">
            <label className="">
              <span className="text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id=""
              required
              className="border-b-2 p-2 border-white bg-transparent w-full outline-none text-white"
            />
          </div>
          <div className="flex justify-center items-center bg-[#ff5103] rounded-full text-white py-3 px-6">
            <input type="submit" value="Register Now" />
          </div>
          <div className="">
            <p className="text-white text-center">Have an Account? <Link to='/login'><span className="text-blue-500 underline"> Login Now</span></Link></p>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Register;
