import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import CampaignCard from "../components/homeComponets/CampaignCard";
import GalleryPhoto from "../components/homeComponets/Gallery";


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
         <Banner></Banner> 
         <CampaignCard 
         allData={allData}
         loading={loading}
         ></CampaignCard> 
         <GalleryPhoto></GalleryPhoto>
        </div>
    );
};

export default Home;