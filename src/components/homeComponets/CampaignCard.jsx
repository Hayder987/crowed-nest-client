import { Typewriter } from "react-simple-typewriter";
import Card from "./Card";
import PropTypes from "prop-types";
import { CirclesWithBar } from "react-loader-spinner";
import { useNavigate } from "react-router";

const CampaignCard = ({ loading, allData }) => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto mb-16 md:mb-20">
      <div className=" p-4 md:p-8 lg:p-14">
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Running Campaign
          </h1>
          <p className="text-base lg:text-2xl text-center">
            <Typewriter
              words={[
                "Make a difference by supporting inspiring ideas with Crowd Nest",
                "Together, we create change—support visionary projects on Crowd Nest.",
                "Your support on Crowd Nest fuels dreams and inspiring visions.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </p>
        </div>
        <div className="">
          <h3 className="text-2xl font-medium mb-3">Recent</h3>
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
              {allData.length === 0 ? (
                <div className="p-6">
                  <h3 className="text-3xl font-medium mb-3 text-center">
                    No Campaign Found
                  </h3>
                </div>
              ) : (
                <div className="">
                  <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {allData.map((item) => (
                      <Card key={item._id} item={item}></Card>
                    ))}
                  </div>
                  <div className="flex justify-center items-center mt-10">
                    <button
                      onClick={() => navigate(`/allcampaign`)}
                      className="bg-[#ff5103] text-white py-3 px-6 rounded-full font-semibold"
                    >
                      All Campaign
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CampaignCard.propTypes = {
  loading: PropTypes.bool,
  allData: PropTypes.array,
};

export default CampaignCard;
