import { useContext, useEffect, useState } from "react";
import { UtilitiContext } from "../Context/UtilitiesProvider";
import { CirclesWithBar } from "react-loader-spinner";
import { AuthContext } from "../Context/AuthProvider";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Swal from "sweetalert2";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

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

  const clearDonationHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:4000/donation/${user?.email}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your History has been clear.",
              icon: "success",
            });
            setAllData([]);
          });
      }
    });
  };

  return (
    <div
      className={`${
        theme ? "bg-slate-100" : "bg-gray-900"
      } min-h-[90vh] p-4 md:p-12 `}
    >
      <Helmet>
        <title>My Donation || Crowed Nest</title>
      </Helmet>
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
                <DotLottieReact src="/nodata.json" loop autoplay />
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto w-full ">
              <h1 className="text-xl font-bold mb-3">Total Donation: {allData.length}</h1>
              <Zoom >
                <div className="grid gird-col-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                  
                  {allData.map((item) => (
                    <div key={item._id} className="border p-4 rounded-xl">
                      <img
                        src={item.imgPath}
                        alt=""
                        className="w-full h-[200px] rounded-lg mb-2"
                      />
                      <h1 className="font-bold mb-2">{item.title}</h1>
                      <p className="text-sm mb-2">
                        <span className="font-semibold ">CampaignType: </span>
                        <span className="">{item.campaignType} </span>
                      </p>
                      <p className="text-base mb-2">
                        <span className="font-semibold ">Amount: </span>
                        <span className="font-bold text-green-600">{item.donateAmount} $</span>
                      </p>
                      <p className="text-sm mb-2">
                        <span className="font-semibold ">Donation-Date: </span>
                        <span className="">{item.donateDate} </span>
                      </p>
                    </div>
                  ))}
                </div>
              </Zoom>
              <div className="flex justify-center item-center mt-10">
                <button
                  onClick={clearDonationHandler}
                  className="bg-[#ff5103] py-3 px-4 font-semibold rounded-xl text-white"
                >
                  Clear History
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyDonations;
