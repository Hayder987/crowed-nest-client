import { useContext } from "react";
import { UtilitiContext } from "../../Context/UtilitiesProvider";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const UpdateForm = ({campaign}) => {
  const { theme } = useContext(UtilitiContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()


  const [startDate, setStartDate] = useState(new Date(campaign.deadline));


  const formatDate = (date) => {
    return date ? date.toISOString().split("T")[0] : "";
  };

  const deadline = formatDate(startDate);

  const updatePostHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const imgPath = form.imgPath.value;
    const title = form.title.value;
    const campaignType = form.campaignType.value;
    const description = form.description.value;
    const textAmount = form.amount.value;
   
    if (isNaN(Number(textAmount))) {
      Swal.fire({
        title: "Donation Amount Field",
        text: "Please Enter Number Value?",
        icon: "error",
      });
      return;
    }
    const amount = parseInt(textAmount);

    const info = {
      imgPath,
      title,
      campaignType,
      description,
      amount,
      deadline,
    };
    fetch(`https://crowd-nest-server-eight.vercel.app/campaign/${campaign?._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: "Campaign Update SuccessFully ",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate('/mycampaign')
      });
  };

  return <div
  className={`p-12 md:p-12 shadow-2xl min-w-[100%]  lg:min-w-[750px] ${
    theme ? "bg-white" : "bg-slate-200 bg-opacity-20"
  } mx-auto rounded-xl mb-10`}
>
  <form onSubmit={updatePostHandler} className="flex flex-col gap-6">
    {/* image url */}
    <div className="">
      <div className="form-control">
        <label className="label">
          <span className={`${theme ? "label-text" : "text-white"}`}>
            Photo Url
          </span>
        </label>
        <input
          type="text"
          name="imgPath"
          defaultValue={campaign?.imgPath}
          placeholder="Enter Image Path"
          className="input input-bordered text-black"
          required
        />
      </div>
    </div>
    {/* Campaign title and Campaign type */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="form-control w-full">
        <label className="label">
          <span className={`${theme ? "label-text" : "text-white"}`}>
            Campaign title
          </span>
        </label>
        <input
          type="text"
          name="title"
          defaultValue={campaign?.title}
          placeholder="Campaign title"
          className="input input-bordered text-black"
          required
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className={`${theme ? "label-text" : "text-white"}`}>
            Campaign type
          </span>
        </label>
        <select
          name="campaignType"
          className="select select-bordered w-full text-black"
          defaultValue={campaign?.campaignType}
          required
        >
          <option value={"personal issue"}>Personal issue</option>
          <option value={"startup"}>Startup</option>
          <option value={"business"}>Business</option>
          <option value={"creative ideas"}>Creative Ideas</option>
          <option value={"medical and health"}>Medical and Health</option>
          <option value={"community development"}>Community Development</option>
        </select>
      </div>
    </div>
    <div className="form-control w-full">
      <label className="label">
        <span className={`${theme ? "label-text" : "text-white"}`}>
          Description
        </span>
      </label>
      <textarea
        name="description"
        className="textarea text-black textarea-bordered resize-none"
        placeholder="Description"
        required
        defaultValue={campaign.description}
      ></textarea>
    </div>
    {/* ammount And Deadline */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="form-control w-full">
        <label className="label">
          <span className={`${theme ? "label-text" : "text-white"}`}>
            Minimum donation amount
          </span>
        </label>
        <input
          type="text"
          name="amount"
          defaultValue={campaign?.amount}
          placeholder="Amount"
          className="input input-bordered text-black"
          required
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className={`${theme ? "label-text" : "text-white"}`}>
           Set Deadline
          </span>
        </label>

        <div className="py-3 px-4 border-2 rounded-xl w-full bg-white text-black">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
    </div>
    {/* email Nad Name */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="form-control w-full">
        <label className="label">
          <span className={`${theme ? "label-text" : "text-white"}`}>
          User Email
          </span>
        </label>
        <input
          type="email"
          name="useremail"
          className="input input-bordered text-black"
          value={user?.email}
          readOnly
          required
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className={`${theme?'label-text':'text-white'}`}>User Name</span>
        </label>
        <input
          type="text"
          name="username"
          className="input input-bordered text-black"
          required
          value={user?.displayName}
          readOnly
        />
      </div>
    </div>
    <div className="flex justify-center items-center py-10">
        <input type="submit" value="Update Campaign" className="bg-[#ff5103] cursor-pointer py-3 px-6 w-full rounded-full font-bold text-white"/>
    </div>
  </form>
</div>;
};

UpdateForm.propTypes={
    campaign:PropTypes.object
}

export default UpdateForm;
