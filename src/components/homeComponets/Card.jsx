import PropTypes from "prop-types";
import { useContext } from "react";
import { UtilitiContext } from "../../Context/UtilitiesProvider";
import { useNavigate } from "react-router";
import { Zoom } from "react-awesome-reveal";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

const Card = ({ item }) => {
  const { theme } = useContext(UtilitiContext);
  const { _id, imgPath, title, description, amount, deadline } = item || {};

  const navigate = useNavigate();

  return (
    <Zoom>
      <div
        className={` group duration-500 ${
          theme ? "bg-white" : "bg-gray-700 bg-opacity-50"
        } p-4 rounded-xl shadow-lg flex flex-col h-full`}
      >
        <div className="flex-grow rounded-lg overflow-hidden mb-4">
          <img
            src={imgPath}
            alt=""
            className=" w-full h-[310px] group-hover:scale-125 duration-500 rounded-lg object-cover"
          />
        </div>
        <div className="flex-grow">
          <h3 className="font-bold mb-3">{title}</h3>
          <p className="mb-4">{description.slice(0, 50)} ...</p>
          <div className="flex justify-between">
            <p className="text-base flex items-center gap-2">
              <span className="font-bold text-2xl">
                <RiMoneyDollarCircleLine />
              </span>
              <span>{amount} $</span>
            </p>
            <p className="text-base flex items-center gap-2">
              <span className="font-bold text-xl">
                <FaCalendarAlt />
              </span>
              <span>{deadline}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center py-4">
          <button
            onClick={() => navigate(`/details/${_id}`)}
            className="bg-[#ff5103] text-white py-2 px-4 rounded-full w-full font-semibold"
          >
            See More
          </button>
        </div>
      </div>
    </Zoom>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
