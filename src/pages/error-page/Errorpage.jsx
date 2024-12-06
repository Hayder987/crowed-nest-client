import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRouteError } from "react-router";


const Errorpage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className="p-6 md:p-12 lg:p-20">
           <div className="md:max-w-[900px] mx-auto p-4">
            <h1 className="text-6xl text-red-600 font-bold text-center mb-6">{error.status}</h1>
            <h3 className="text-2xl md:text-5xl font-semibold text-center mb-6">{error.statusText}</h3>
            <h3 className="text-2xl md:text-4xl font-semibold text-center mb-8">{error.error.message}</h3>
             <p className="">
             <DotLottieReact src="/error-animation.json" loop autoplay />
             </p>
           </div> 
        </div>
    );
};

export default Errorpage;