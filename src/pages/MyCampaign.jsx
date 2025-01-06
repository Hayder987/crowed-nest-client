import { useContext, useEffect, useState } from "react";
import { UtilitiContext } from "../Context/UtilitiesProvider";
import { useNavigate } from "react-router";
import { CirclesWithBar } from "react-loader-spinner";
import { AuthContext } from "../Context/AuthProvider";
import { MdDelete, MdEdit } from "react-icons/md";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const MyCampaign = () => {
  const { theme } = useContext(UtilitiContext);
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const date = new Date();
  const formatDate = (currentDate) => {
    return currentDate.toISOString().split("T")[0];
  };

  const newDate = formatDate(date);

  useEffect(() => {
    fetch(`http://localhost:4000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setLoading(false);
      });
  }, [user]);


  const deleteHandler = (id) => {
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
        fetch(`http://localhost:4000/campaigns/${id}`,{
          method:"DELETE"
        })
          .then((res) => res.json())
          .then((result) => {
            if(result.deletedCount>0){
              const remaing = allData.filter((item) => item._id !== id);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                timer: 1500
              });
              setAllData(remaing);
            } 
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
      <Helmet><title>My Campaign || Crowed Nest</title></Helmet>
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
            Table Layout Of {user?.displayName} Campaign
          </h1>
          {allData.length === 0 ? (
            <div className="">
              <h1 className="text-center text-xl md:text-3xl font-medium mb-6">
                <span className="">Hi! {user.displayName}</span>
                <br />
                <span className="">You Have No Campaign </span>
              </h1>
              <p className="max-w-[650px] mx-auto">
                <DotLottieReact src="/nodata.json" loop autoplay />
              </p>
            </div>
          ) : (
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
                    <th>Campaign Name</th>
                    <th>Minimum Amount</th>
                    <th>Published</th>
                    <th>Deadline</th>
                    <th>Action</th>
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
                      <td>{item?.title}</td>
                      <th>{item?.amount}</th>
                      <td>{item?.published}</td>
                      <td
                        className={`${
                          newDate > item?.deadline
                            ? "text-red-600"
                            : `${theme ? "text-black" : "text-white"}`
                        } flex justify-start items-center gap-2`}
                      >
                        {newDate > item?.deadline ? (
                          <p>Expired</p>
                        ) : (
                          <span className="">{item?.deadline}</span>
                        )}
                      </td>
                      <td>
                        <div className="flex justify-start gap-3">
                          <button
                            onClick={() => navigate(`/update/${item?._id}`)}
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Edit"
                            data-tooltip-place="top"
                            className="bg-green-600 text-xl text-white p-2 rounded-lg"
                          >
                            <MdEdit />
                          </button>
                          <button
                            onClick={() => deleteHandler(item?._id)}
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Delete"
                            data-tooltip-place="top"
                            className="bg-red-600 text-xl text-white p-2 rounded-lg"
                          >
                            <MdDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </Slide>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyCampaign;
