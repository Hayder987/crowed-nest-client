import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import CampaignCard from "../components/homeComponets/CampaignCard";


const Home = () => {
    const [allData, setAllData] = useState([])
     const [loading, setLoading] = useState(true)

     useEffect(()=>{
      fetch('http://localhost:4000/recent')
      .then(res=> res.json())
      .then(data=> setAllData(data))
      setLoading(false)
     },[])

    return (
        <div>
         <Banner></Banner> 
         <CampaignCard 
         allData={allData}
         loading={loading}
         ></CampaignCard>  
        </div>
    );
};

export default Home;