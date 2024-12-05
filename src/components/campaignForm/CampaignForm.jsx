import { useContext } from "react";
import { UtilitiContext } from "../../Context/UtilitiesProvider";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const CampaignForm = () => {
  const { theme } = useContext(UtilitiContext);
  const {user} = useContext(AuthContext)

  const [startDate, setStartDate] = useState(new Date());
  const currentDate = new Date();


  const formatDate = (date) => {
    return date ? date.toISOString().split("T")[0] : "";
  };

  const deadline = formatDate(startDate);
  const published = formatDate(currentDate);


 

const addPostHandler = e =>{
    e.preventDefault()
    const form = e.target;
    const imgPath = form.imgPath.value;
    const title = form.title.value;
    const campaignType = form.campaignType.value;
    const description = form.description.value;
    const textAmount = form.amount.value;
    const useremail = form.useremail.value;
    const username = form.username.value;
    if(isNaN(Number(textAmount))){
      Swal.fire({
        title: "Donation Amount Field",
        text: "Please Enter Number Value?",
        icon: "error"
      });
      return
    }
    const amount = parseInt(textAmount)
   
    const info = {username, useremail, imgPath, title, campaignType, description, amount, deadline, published}
    fetch('http://localhost:4000/campaigns',{
        method:'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(info)
    })
    .then(res=> res.json())
    .then(()=>{
        Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Post SuccessFully added Server",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset()
    })
}

  return (
    <div
      className={`p-12 md:p-12 shadow-2xl min-w-[100%]  lg:min-w-[750px] ${
        theme ? "bg-white" : "bg-slate-200 bg-opacity-20"
      } mx-auto rounded-xl mb-10`}
    >
      <form onSubmit={addPostHandler} className="flex flex-col gap-6">
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
            >
              <option disabled selected>
                Select Campaign type
              </option>
              <option value={"personal issue"}>personal issue</option>
              <option value={"startup"}>startup</option>
              <option value={"business"}>business</option>
              <option value={"creative ideas"}>creative ideas</option>
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
            <input type="submit" value="Add Campaign" className="bg-[#ff5103] cursor-pointer py-3 px-6 w-full rounded-full font-bold text-white"/>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;





