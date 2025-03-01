import { useContext, useEffect, useState } from "react";
import { UtilitiContext } from "../Context/UtilitiesProvider";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineUpdateDisabled } from "react-icons/md";
import { useNavigate } from "react-router";
import { CirclesWithBar } from "react-loader-spinner";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const AllCampaign = () => {
  const { theme } = useContext(UtilitiContext);
  const [allData, setAllData] = useState([]);
  const date = new Date();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(false)

  const formatDate = (currentDate) => {
    return currentDate.toISOString().split("T")[0];
  };

  const newDate = formatDate(date);

  useEffect(() => {
    fetch("https://crowd-nest-server-eight.vercel.app/campaigns")
      .then((res) => res.json())
      .then((data) => {
        sort?setAllData([...allData].sort((a, b)=> b?.amount - a?.amount)):
        setAllData(data);
        setLoading(false);
      });
  }, [allData,sort]);

  return (
    <div
      className={`${
        theme ? "bg-slate-100" : "bg-gray-900"
      } min-h-[90vh] p-4 md:p-12 `}
    >
      <Helmet><title>All Campaign || Crowed Nest</title></Helmet>
      {
        loading? <div className="flex justify-center">
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
        </div>:
        <div
        className={`container min-h-[60vh] mx-auto ${
          theme ? "bg-white" : "bg-opacity-30 bg-gray-600"
        } rounded-xl p-6 md:p-10 lg:p-16 `}
      >
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-10">
          Table Layout Of All Campaign
        </h1>
        <div className="overflow-x-auto w-full ">
          <div className="flex justify-between mb-3">
            <h3 className="font-medium">
              <span className="">Toatal Campaign: </span>
              {allData.length}
            </h3>
            <button 
               data-tooltip-id="my-tooltip"
               data-tooltip-content="Sorted Amount High To Low!"
               data-tooltip-place="bottom"
               onClick={()=> setSort(true)} className="bg-[#ff5103] py-3 px-6 text-white font-medium">
               Sorted by Amount
            </button>
          </div>
          <Zoom>
          <table className="table">
            {/* head */}
            <thead>
              <tr
                className={`${
                  theme ? "text-black bg-blue-200" : "text-white bg-slate-500"
                }`}
              >
                <th>SL</th>
                <th>User</th>
                <th>Image</th>
                <th>campaign Name</th>
                <th>Minimum Amount</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {allData.map((item, index) => (
                <tr
                  key={item?._id}
                  className={`${theme ? "border-gray-200" : "border-gray-500"}`}
                >
                  <th>{index + 1}</th>
                  <td>{item?.username}</td>
                  <td>
                    <img src={item?.imgPath} alt="" className="w-12 h-12 rounded-full" />
                  </td>
                  <td>{item?.title}</td>
                  <th>{item?.amount}</th>
                  <td
                    className={`${
                      newDate > item?.deadline
                        ? "text-red-600"
                        : `${theme ? "text-black" : "text-white"}`
                    } flex justify-start items-center gap-2`}
                  >
                    {item?.deadline}{" "}
                    {newDate > item?.deadline ? (
                      <MdOutlineUpdateDisabled />
                    ) : (
                      ""
                    )}
                  </td>
                  <td>
                    <button
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="See Details!"
                      data-tooltip-place="top"
                      onClick={() => navigate(`/details/${item?._id}`)}
                      className="  flex justify-center items-center gap-3 border p-2"
                    >
                      <span className="text-xl text-green-600">
                        <TbListDetails />
                      </span>
                      <span className="">See more</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </Zoom>
        </div>
      </div>
      }
     </div>
  );
};

export default AllCampaign;
