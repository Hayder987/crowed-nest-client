import { useContext, useEffect, useState } from "react";
import { UtilitiContext } from "../Context/UtilitiesProvider";
import { CirclesWithBar } from "react-loader-spinner";
import { AuthContext } from "../Context/AuthProvider";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Swal from "sweetalert2";

const MyDonations = () => {
  const { theme } = useContext(UtilitiContext);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
 

  useEffect(() => {
    fetch(`http://localhost:4000/donation/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setLoading(false);
      });
  }, [user]);

  const clearDonationHandler =()=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:4000/donation/${user?.email}`,{
                method: 'DELETE'
            })
            .then((res) => res.json())
            .then(() => {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your History has been clear.",
                    icon: "success"
                  });
              setAllData([]);
            });
        }
      });
    
  }


  return <div
      className={`${
        theme ? "bg-slate-100" : "bg-gray-900"
      } min-h-[90vh] p-4 md:p-12 `}
    >
      {loading ? (
        <div className="flex justify-center">
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div
          className={`lg:max-w-[1200px] min-h-[60vh] mx-auto ${
            theme ? "bg-white" : "bg-opacity-30 bg-gray-600"
          } rounded-xl p-6 md:p-10 lg:p-16 `}
        >
          <h1 className="text-xl md:text-4xl font-semibold text-center mb-10">
            My Donation History
          </h1>
          {allData.length === 0 ? (
            <div className="">
              <h1 className="text-center text-xl md:text-3xl font-medium mb-6">
                <span className="">Hi! {user.displayName}</span>
                <br />
                <span className="">You Have No Donation History </span>
              </h1>
              <p className="max-w-[650px] mx-auto">
                <DotLottieReact src="/public/nodata.json" loop autoplay />
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto w-full ">
              <table className="table">
                {/* head */}
                <thead>
                  <tr
                    className={`${
                      theme
                        ? "text-black bg-blue-200"
                        : "text-white bg-slate-500"
                    }`}
                  >
                    <th>SL</th>
                    <th></th>
                    <th>Campaign Name</th>
                    <th>Campaign Type</th>  
                    <th>Donation Amount</th>
                    <th>Donate Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row */}
                  {allData.map((item, index) => (
                    <tr
                      key={item?._id}
                      className={`${
                        theme ? "border-gray-200" : "border-gray-500"
                      }`}
                    >
                      <th>{index + 1}</th>
                      <td><img src={item?.imgPath} alt="" className="w-10 h-10 rounded-full" /></td>
                      <td>{item?.title}</td>
                      <th>{item?.campaignType}</th>
                      <td>{item?.donateAmount}</td>
                      <td>{item?.donateDate}</td>
                     
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center item-center mt-4">
                <button onClick={clearDonationHandler} className="bg-[#ff5103] py-3 px-4 font-semibold rounded-xl text-white">Clear History</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>;
};

export default MyDonations;
