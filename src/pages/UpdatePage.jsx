import { useContext, useEffect, useState } from "react";
import banner from "../assets/addBanner.jpg";
import { UtilitiContext } from "../Context/UtilitiesProvider";
import { useParams } from "react-router";
import UpdateForm from "../components/updateForm/UpdateForm";
import { CirclesWithBar } from "react-loader-spinner";

const UpdatePage = () => {
  const { theme } = useContext(UtilitiContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [campaign, setCampaign] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/campaign/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCampaign(data);
        setLoading(false);
      });
  }, [id]);

  console.log(campaign);
  return (
    <div className="">
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
        <div className="">
          {theme ? (
            <div
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="min-h-[90vh] flex flex-col justify-center items-center p-4 py-14 md:p-12"
            >
              <h1 className=" text-3xl font-semibold mb-10">
                Update {campaign?.title} Campaign
              </h1>
              <UpdateForm campaign={campaign}></UpdateForm>
            </div>
          ) : (
            <div className="bg-gray-900 min-h-[90vh] flex flex-col justify-center items-center p-4 py-14 md:p-12">
              <h1 className=" text-3xl font-semibold mb-10">
                Update {campaign?.title} Campaign
              </h1>
              <UpdateForm campaign={campaign}></UpdateForm>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UpdatePage;
