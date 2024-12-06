import { Gallery } from "react-grid-gallery";

const GalleryPhoto = () => {
    const photos = [
        {
          src: "https://i.ibb.co.com/bL6RXgM/Rebuilding-Homes-After-Natural-Disasters.webp",
          width: 700,
          height: 500,
        },
        {
          src: "https://i.ibb.co.com/Gf6hmbw/Empowering-Women-with-Handicraft-Business.jpg",
          width: 600,
          height: 300,
        },
        {
          src: "https://i.ibb.co.com/0Z12Ttf/Eco-Friendly-Startup.jpg",
          width: 700,
          height: 300,
        },
        {
            src: "https://i.ibb.co.com/pLHcjYQ/Comilla-Warmth-Initiative.jpg",
            width:  600,
            height: 300,
        },
        {
            src: "https://i.ibb.co.com/NNw1sVV/bridge.jpg",
            width: 700,
            height: 400,
        },
        {
            src: "https://i.ibb.co.com/t2p4gGS/DSC-0136.webp",
            width: 800,
            height: 300,
        },
        {
            src: "https://i.ibb.co.com/7pVDRpF/school.jpg",
            width: 900,
            height: 500,
          },
          {
            src: "https://i.ibb.co.com/6P1P0T0/LSW-3.jpg",
            width: 1200,
            height: 500,
          },
          {
            src: "https://i.ibb.co.com/pbs494T/projects-header-bbe2f1c4.jpg",
            width: 1200,
            height: 500,
          },

      ];

    return (
        <div className="container mx-auto mb-16 md:mb-28">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">Together We Create</h1>  
          <p className="text-base lg:text-2xl text-center mb-12 md:mb-16"> Dive into moments that showcase the beauty of teamwork 
            and collaboration. Every image is a reminder of what we can achieve when 
            we come together for a cause.
          </p>
          <div className="p-2">
          <Gallery images={photos} />
          </div>

        </div>
    );
};

export default GalleryPhoto;