import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import CampaignCard from "../components/homeComponets/CampaignCard";
import GalleryPhoto from "../components/homeComponets/Gallery";
import About from "../components/homeComponets/About";
import SatatusBar from "../components/homeComponets/SatatusBar";
import { Fade, Slide } from "react-awesome-reveal";


const Home = () => {
    const [allData, setAllData] = useState([])
     const [loading, setLoading] = useState(true)

     useEffect(()=>{
      fetch('https://crowd-nest-server-eight.vercel.app/recent')
      .then(res=> res.json())
      .then(data=> {
        setAllData(data)
        setLoading(false)
      })
      
     },[])

    return (
        <div>
         <Fade>
          <Banner></Banner>
          </Fade> 
         <CampaignCard 
           allData={allData}
           loading={loading}
         ></CampaignCard> 
         <GalleryPhoto></GalleryPhoto>
         <About></About>
         <Slide direction="up">
         <SatatusBar></SatatusBar>
         </Slide>
        </div>
    );
};

export default Home;