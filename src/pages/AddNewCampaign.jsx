import banner from '../assets/addBanner.jpg'

const AddNewCampaign = () => {
    return (
        <div
        style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className='min-h-[90vh]'
        >
            
        </div>
    );
};

export default AddNewCampaign;