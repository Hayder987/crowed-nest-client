import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex justify-center items-center bg-slate-700 text-white px-4 py-10 md:py-16">
        <div className="flex flex-col justify-center items-center">
          {/* logo */}
          <div className="flex mb-8 justify-center items-center gap-2">
            <img src="/fav-logo.jpg" alt="" className="w-16 h-16 rounded-2xl" />
            <h1 className="text-xl md:text-3xl font-bold text-gray-200">
              Crowd Nest
            </h1>
          </div>
          {/* desc */}
          <p className="text-center w-full md:w-9/12 lg:w-7/12 mx-auto text-xl text-gray-300">
            Crowd Nest is a crowdfunding platform designed to connect passionate
            individuals and communities in need with supporters who want to make
            a difference. It empowers users to bring creative ideas to life,
            fund meaningful causes, and create lasting impact through
            collaboration.
          </p>
          {/* links */}
          <div className="">
            <div className="text-4xl flex items-center gap-6 mt-8">
              <button
              onClick={()=>{
                window.open("https://www.facebook.com/profile.php?id=100006202260978", "_blank");
              }}
               className="hover:text-[#ff5103]"><FaFacebook /></button>
              <button
              onClick={()=>{
                window.open("https://github.com/", "_blank");
              }}
               className="hover:text-[#ff5103]"><FaGithub /></button>
              <button
               onClick={()=>{
                window.open("https://x.com/hayder4290", "_blank");
              }}
               className="hover:text-[#ff5103]"><FaXTwitter /></button>
            </div>
          </div>
          {/* author */}
          <div className="divider"></div>
          <div className="">
          <p className="text-xl font-medium">&copy; {new Date().getFullYear()} All rights reserved by Hayder Ali</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
