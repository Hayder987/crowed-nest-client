

const SatatusBar = () => {
    return (
        <div className="bg-[#ff5103] py-12 ">
            <div className="container mx-auto grid gap-10 grid-cols-2 lg:grid-cols-4">
               <div className="text-white">
                <h1 className="font-bold text-5xl text-center">65+</h1>
                <p className="text-xl font-medium text-gray-200 text-center">Campaign</p>
               </div>
               <div className="text-white">
                <h1 className="font-bold text-5xl text-center">1500+</h1>
                <p className="text-xl font-medium text-gray-200 text-center">Donation</p>
               </div>
               <div className="text-white">
                <h1 className="font-bold text-5xl text-center">105+</h1>
                <p className="text-xl font-medium text-gray-200 text-center">Countries</p>
               </div>
               <div className="text-white">
                <h1 className="font-bold text-5xl text-center">25M+</h1>
                <p className="text-xl font-medium text-gray-200 text-center">Last Year</p>
               </div>
            </div>
        </div>
    );
};

export default SatatusBar;