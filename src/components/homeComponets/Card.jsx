import PropTypes from "prop-types";
import { useContext } from "react";
import { UtilitiContext } from "../../Context/UtilitiesProvider";
import { useNavigate } from "react-router";


const Card = ({item}) => {
    const {theme} = useContext(UtilitiContext)
    const {_id, imgPath, title, description, amount, deadline} = item || {}

    const navigate = useNavigate()


    return (
        <div className={`${theme?'bg-white':"bg-gray-700 bg-opacity-50"} p-4 rounded-xl  shadow-lg`}>
         <div className="mb-4">
            <img src={imgPath} alt="" className="rounded-l-lg w-full h-[310px] rounded-lg object-cover" />
         </div> 
         <div className="">
            <h3 className=" font-bold mb-3">{title}</h3>
            <p className="mb-4">{description.slice(0,70)} ...</p>
            <div className="flex justify-between">
              <p className="text-sm">
                <span className="font-bold ">Minimum Amount: </span>
                <span className="">{amount} $</span>
              </p> 
              <p className="text-sm">
                <span className="font-bold ">DeadLine: </span>
                <span className="">{deadline}</span>
              </p> 
            </div>
            <div className="flex justify-center items-center py-4">
             <button onClick={()=> navigate(`/details/${_id}`)} className="bg-[#ff5103]  text-white py-2 px-4 rounded-full w-full font-semibold">SeeMore</button>
            </div>
         </div>
        </div>
    );
};

Card.propTypes={
    item:PropTypes.object
}

export default Card;