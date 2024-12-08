import { useContext, useState } from "react";
import { UtilitiContext } from "../../Context/UtilitiesProvider";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import { MdLogout } from "react-icons/md";
import Swal from "sweetalert2";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const { theme, setTheme } = useContext(UtilitiContext);
  const {user ,loading, userLogout} = useContext(AuthContext)
  const navigate  = useNavigate();
  const [hover, setHover] = useState(false)
  const [menu, setMenu] = useState(false)


  const LogoutHandler = ()=>{
    userLogout()
    .then(()=>{
      navigate('/login')
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "User Logout SuccessFully",
        showConfirmButton: false,
        timer: 1500
      });
      setHover(false)
    })
  }
 
  return (
    <div>
      <nav className="flex relative justify-between items-center px-2 py-4 md:w-11/12 mx-auto">
        <div className="flex justify-center items-center gap-2">
          <img src="/fav-logo.jpg" alt="" className="w-16 h-16 rounded-2xl" />
          <h1 className="text-xl md:text-3xl font-bold text-[#ff5103]">
            Crowd Nest
          </h1>
        </div>
        <div onClick={()=> setMenu(!menu)} className="text-3xl ">
         <div className="flex lg:hidden">
         {
            menu?<RxCross2 />:<AiOutlineMenuUnfold />
          }
         </div>
        </div>
        <div className={`bg-[#140701] ${menu?"flex":'hidden'} absolute top-24 left-0 z-10  p-6 lg:hidden w-full`}>
          <ul onClick={()=> setMenu(!menu)} className="flex flex-col gap-4 text-white text-xl">
            <NavLink to='/'><li className="">Home</li></NavLink>
            <NavLink to='/allcampaign'><li className="">All Campaign</li></NavLink>
            <NavLink to="/newcampaign"><li className="">Add New Campaign</li></NavLink>
            <NavLink to='/mycampaign'><li className="">My Campaign</li></NavLink>
            <NavLink to='/mydonation'><li className="">My Donations</li></NavLink>
          </ul>
          
        </div>


        <div className="">
          <ul className="hidden lg:flex justify-center items-center gap-8 cursor-pointer">
            <NavLink to='/'><li className="">Home</li></NavLink>
            <NavLink to='/allcampaign'><li className="">All Campaign</li></NavLink>
            <NavLink to="/newcampaign"><li className="">Add New Campaign</li></NavLink>
            <NavLink to='/mycampaign'><li className="">My Campaign</li></NavLink>
            <NavLink to='/mydonation'><li className="">My Donations</li></NavLink>
          </ul>
          
        </div>

        
        <div className="flex gap-4 justify-center items-center">
          {
            loading?"":
            <div className="">
              {
            user? <div
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(true)}
             className="">
              <img  src={user.photoURL} alt="" className="w-14 h-14 rounded-full border p-1" />
            </div>:
            <div className="flex gap-2 md:gap-4 font-semibold">
            <button onClick={()=> navigate('/login')} className="">Login</button>
            <button onClick={()=> navigate('/register')} className="bg-[#ff5103] text-white py-2 px-4">
              Register
            </button>
          </div>
          }
            </div>
          }
          {/* Toggle */}
          <div onChange={()=>setTheme(!theme)} className="">
            <form className="">
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className="swap-off h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </form>
          </div>
        </div>
        <div onMouseLeave={()=> setHover(false)} className={`
        bg-blue-200 bg-opacity-90 p-6 min-w-[250px] min-h-[300px] rounded-xl ${hover?"flex":"hidden"} absolute z-10 top-24 right-0 
          `}>
          <div className="w-full">
            <h1 className="text-center text-2xl font-semibold text-black">Welcome!</h1>
            <div className="flex justify-center items-center my-6">
              <img src={user?.photoURL} alt="" className="w-28 h-28" />
            </div>
            <h1 className="text-center text-2xl font-semibold text-black">{user?.displayName}</h1>
            <div className="flex justify-center my-4">
              <button onClick={LogoutHandler} className="flex justify-center items-center gap-3 bg-[#ff5103] text-white font-medium py-2 px-4 text-xl ">
                <span className="">Logout</span>
                <span className=""><MdLogout /></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;




