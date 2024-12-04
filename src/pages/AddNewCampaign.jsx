import { useContext } from 'react';
import banner from '../assets/addBanner.jpg'
import CampaignForm from '../components/campaignForm/CampaignForm';
import { UtilitiContext } from '../Context/UtilitiesProvider';


const AddNewCampaign = () => {
    const {theme} = useContext(UtilitiContext)
    return (
        <div className="">
            {
                theme?<div
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className='min-h-[90vh] flex flex-col justify-center items-center p-4 py-14 md:p-12'
                >
                   <h1 className=" text-3xl font-semibold mb-10">Add Your Campaign</h1>
                  <CampaignForm></CampaignForm>
                </div>:
                <div className="bg-gray-900 min-h-[90vh] flex flex-col justify-center items-center p-4 py-14 md:p-12">
                   <h1 className=" text-3xl font-semibold mb-10">Add Your Campaign</h1>
                   <CampaignForm></CampaignForm> 
                </div>
            }
        </div>
    );
};

export default AddNewCampaign;