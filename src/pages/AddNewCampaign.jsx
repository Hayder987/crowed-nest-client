import { useContext } from 'react';
import banner from '../assets/whiteBanner.jpg'
import CampaignForm from '../components/campaignForm/CampaignForm';
import { UtilitiContext } from '../Context/UtilitiesProvider';
import { Zoom } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';


const AddNewCampaign = () => {
    const {theme} = useContext(UtilitiContext)
    return (
        <div className="">
            <Helmet><title>Add Campaign || Crowed Nest</title></Helmet>
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
                  <Zoom><CampaignForm></CampaignForm></Zoom>
                </div>:
                <div className="bg-gray-900 min-h-[90vh] flex flex-col justify-center items-center p-4 py-14 md:p-12">
                   <h1 className=" text-3xl font-semibold mb-10">Add Your Campaign</h1>
                   <Zoom><CampaignForm></CampaignForm></Zoom>
                </div>
            }
        </div>
    );
};

export default AddNewCampaign;