import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import CampaignCard from "../components/homeComponets/CampaignCard";
import GalleryPhoto from "../components/homeComponets/Gallery";
import About from "../components/homeComponets/About";
import SatatusBar from "../components/homeComponets/SatatusBar";
import { Fade, Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";


const Home = () => {
    const [allData, setAllData] = useState([])
     const [loading, setLoading] = useState(true)

     useEffect(()=>{
      fetch('http://localhost:4000/recent')
      .then(res=> res.json())
      .then(data=> {
        setAllData(data)
        setLoading(false)
      })
      
     },[])

    return (
        <div>
          <Helmet>
            <title>Home || Crowed Nest</title>
          </Helmet>
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