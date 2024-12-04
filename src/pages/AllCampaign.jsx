import { useContext, useEffect, useState } from "react";
import { UtilitiContext } from "../Context/UtilitiesProvider";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineUpdateDisabled } from "react-icons/md";

const AllCampaign = () => {
  const { theme } = useContext(UtilitiContext);
  const [allData, setAllData] = useState([]);
  const date = new Date();

  const formatDate = (currentDate) => {
    return currentDate.toISOString().split("T")[0];
  };

  const newDate = formatDate(date);
  console.log(newDate)

  useEffect(() => {
    fetch("http://localhost:4000/campaigns", {})
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);
  console.log(allData);

  return (
    <div
      className={`${
        theme ? "bg-slate-100" : "bg-gray-900"
      } min-h-[90vh] p-4 md:p-12 `}
    >
      <div
        className={`lg:max-w-[1200px] min-h-[60vh] mx-auto ${
          theme ? "bg-white" : "bg-opacity-30 bg-gray-600"
        } rounded-xl p-6 md:p-10 lg:p-16 `}
      >
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-10">Table Layout Of All Campaign</h1>
        <div className="overflow-x-auto w-full ">
          <table className="table">
            {/* head */}
            <thead>
              <tr className={`${theme ? "text-black bg-blue-200" : "text-white bg-slate-500"}`}>
                <th>SL</th>
                <th>User</th>
                <th>campaignType</th>
                <th>Amount</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allData.map((item, index) => (
                <tr key={item?._id} className={`${theme?'border-gray-200':'border-gray-500'}`}>
                  <th>{index + 1}</th>
                  <td>{item?.username}</td>
                  <td>{item?.campaignType}</td>
                  <th>{item?.amount}</th>
                  <td className={`${newDate>item?.deadline?'text-red-600':`${theme?"text-black":'text-white'}`} flex justify-center items-center gap-2`}>{item?.deadline} {newDate>item?.deadline?<MdOutlineUpdateDisabled />:''}</td>
                  <td><button className="text-xl text-green-600"><TbListDetails /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCampaign;
