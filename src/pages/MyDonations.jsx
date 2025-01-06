import { useContext, useEffect, useState } from "react";
import { UtilitiContext } from "../Context/UtilitiesProvider";
import { CirclesWithBar } from "react-loader-spinner";
import { AuthContext } from "../Context/AuthProvider";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Swal from "sweetalert2";
import { Slide, Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { CgMenuGridR } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

const MyDonations = () => {
  const { theme } = useContext(UtilitiContext);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [layout, setLayout] = useState("table");

  useEffect(() => {
    fetch(`https://crowd-nest-server-eight.vercel.app/donation/${user?.email}`)
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
        fetch(`https://crowd-nest-server-eight.vercel.app/donation/${user?.email}`, {
          method: "DELETE",
        })
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
          className={`container min-h-[60vh] mx-auto ${
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
              <div
                className={`py-3 ${
                  theme ? "text-black bg-blue-200" : "text-white bg-slate-500"
                } px-4 mb-5 flex justify-between items-center`}
              >
                <h1 className="text-xl font-bold">
                  Total Donation: {allData.length}
                </h1>
                <div className="flex justify-center items-center gap-5 cursor-pointer text-3xl">
                  <button
                    onClick={() => setLayout("table")}
                    className={`${layout === "table" && "text-[#ff5103]"}`}
                  >
                    <FaBars />
                  </button>
                  <button
                    onClick={() => setLayout("card")}
                    className={`text-4xl ${
                      layout === "card" && "text-[#ff5103]"
                    }`}
                  >
                    <CgMenuGridR />
                  </button>
                </div>
              </div>

              <div className="min-h-[50vh]">
                {layout === "card" && (
                  <Zoom>
                    <div className="grid gird-col-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                      {allData.map((item) => (
                        <div key={item._id} className="border p-4 rounded-xl">
                          <img
                            src={item.imgPath}
                            alt=""
                            className="w-full h-[200px] rounded-lg mb-2"
                          />
                          <h1 className="font-bold mb-2">{item.title}</h1>
                          <p className="text-sm mb-2">
                            <span className="font-semibold ">
                              CampaignType:{" "}
                            </span>
                            <span className="">{item.campaignType} </span>
                          </p>
                          <p className="text-base mb-2">
                            <span className="font-semibold ">Amount: </span>
                            <span className="font-bold text-green-600">
                              {item.donateAmount} $
                            </span>
                          </p>
                          <p className="text-sm mb-2">
                            <span className="font-semibold ">
                              Donation-Date:{" "}
                            </span>
                            <span className="">{item.donateDate} </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </Zoom>
                )}
                {layout === "table" && (
                  <div className="overflow-x-auto w-full ">
                    <Slide direction="up">
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
                            <th>Campaign Type</th>
                            <th>Image</th>
                            <th>Campaign Name</th>
                            <th>Campaign Type</th>
                            <th>Donation Amount</th>
                            <th>Donation-Date</th>
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
                              <td>{item?.campaignType}</td>
                              <td>
                                <img
                                  src={item?.imgPath}
                                  alt=""
                                  className="w-12 h-12 rounded-full"
                                />
                              </td>
                              <td>{item?.title}</td>
                              <th>{item.campaignType}</th>
                              <td>{item.donateAmount} $</td>
                              <td>{item.donateDate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </Slide>
                  </div>
                )}
              </div>
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
