import { useContext, useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { useParams } from "react-router";
import { UtilitiContext } from "../Context/UtilitiesProvider";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const DetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [campaign, setCampaign] = useState(null);
  const { id } = useParams();
  const { theme } = useContext(UtilitiContext);
  const date = new Date();

  const formatDate = (currentDate) => {
    return currentDate.toISOString().split("T")[0];
  };
  const newDate = formatDate(date);
  const donateDate = formatDate(date);
  const {user} = useContext(AuthContext)


  useEffect(() => {
    fetch(`https://crowd-nest-server-eight.vercel.app/campaign/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCampaign(data);
        setLoading(false);
      });
  }, [id]);

  const {
    username,
    useremail,
    imgPath,
    title,
    campaignType,
    description,
    amount,
    deadline,
    published,
  } = campaign || {};

  const donateHandler = () =>{
    if(deadline<newDate){
      Swal.fire({
        icon: "info",
        title: "Time Over",
        text: "You Can't Donate This Campaign!",
      });
        return
    }
    
    const donateAmount = amount
    const name = user?. displayName;
    const email = user?.email;

   

    const donateInfo = {
        name,
        email,
        title,
        campaignType,
        donateAmount,
        donateDate,
        deadline,
        imgPath,
        description,
        amount,
    }

    fetch(`https://crowd-nest-server-eight.vercel.app/donation`,{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(donateInfo)
    })
    .then(res=> res.json())
    .then(()=>{
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: `Your Donation ${donateAmount} $ Bring New Hope!`,
      });
      
    })

  }

  return (
    <div
      className={`${
        theme ? "bg-slate-100" : "bg-gray-900"
      } min-h-[90vh] p-4 md:p-12 `}
    >
      <Helmet><title>Details || Crowed Nest</title></Helmet>
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
        //   details Card
        <div
          className={`lg:max-w-[1200px] mx-auto ${
            theme ? "bg-white" : "bg-opacity-30 bg-gray-600"
          } rounded-xl p-2 md:p-6 lg:p-16 flex gap-10 flex-col md:flex-row `}
        >
          <div className="md:w-1/2 shadow-lg">
            <img
              src={imgPath}
              alt=""
              className="w-full h-full min-h-[350px] rounded-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <div className="flex justify-between mb-4">
              <p className="">
                <span className="font-bold">Published On: </span>
                <span className="">{published}</span>
              </p>
              {deadline < newDate ? (
                <p className="font-bold text-red-500">Campaign Over!</p>
              ) : (
                <p className="">
                  <span className="font-bold">DeadLine: </span>
                  <span className="">{deadline}</span>
                </p>
              )}
            </div>
            <div className="flex justify-between mb-3">
              <p className="">
                <span className="font-bold ">Published By: </span>
                <span className="">{username}</span>
              </p>
              <p className="">
                <span className="font-bold ">Eamil: </span>
                <span className="">{useremail}</span>
              </p>
            </div>
            <p className="text-2xl font-bold mb-4 text-[#ff5103]">{title}</p>
            <p className="text-xl">
              <span className="font-bold ">Minimum Amount: </span>
              <span className="">{amount} $</span>
            </p>
            <div className="divider"></div>
            <p className="text-sm mb-2">
              <span className="font-bold ">Campaign Type: </span>
              <span className="">{campaignType} </span>
            </p>
            <p className="text-sm">{description}</p>
            <div className="divider"></div>
            <button onClick={donateHandler}  className="py-3 w-full bg-[#ff5103] px-4 text-white font-semibold rounded-full" >Donate </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
