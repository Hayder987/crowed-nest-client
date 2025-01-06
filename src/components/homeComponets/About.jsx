import { Slide } from "react-awesome-reveal";
import { FcApproval } from "react-icons/fc";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="container mx-auto mb-16 md:mb-28">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
        About Our Campaign
      </h1>
      <p className="text-base w-full md:w-3/4 mx-auto lg:text-xl text-center mb-12 md:mb-16">
        At Crowd Nest, we empower dreams by connecting passionate individuals
        with a supportive community of backers. Our platform fosters innovation,
        collaboration, and positive change
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* img */}
        <div className="md:w-1/2 grid grid-cols-2 gap-16 p-6">
          <Slide direction="left">
            <img
              src="https://i.ibb.co.com/tBVDJs2/medical-portirote.jpg"
              alt=""
              className="min-h-[250px] md:max-h-[450px] h-full rounded-3xl"
            />
          </Slide>
          <Slide direction="left">
            <img
              src="https://i.ibb.co.com/GxXPVFH/shutterstock-748771915.jpg"
              alt=""
              className="min-h-[250px] md:max-h-[450px] h-full rounded-3xl"
            />
          </Slide>
        </div>
        {/*  */}
        <div className="md:w-1/2 p-6 mb-16 md:mb-28">
          <Slide direction="right">
          <div className="">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Communities in need To support Our Focus
            </h1>
            <p className="mb-6">
              At Crowd Nest, we recognize that every community has its unique
              challenges and aspirations. Our focus is on empowering those who
              need it the most by connecting them with compassionate backers who
              believe in the power of collective action. From underprivileged
              neighborhoods to marginalized groups, we strive to address the
              most pressing issues that can create a lasting impact.
            </p>
            <div className="flex justify-start gap-6 md:gap-14 items-center mb-6">
              <p className="flex justify-center items-center gap-3 md:text-xl">
                <span className="">
                  <FcApproval />
                </span>
                <span className="">Community Empowerment</span>
              </p>
              <p className="flex justify-start  items-center gap-3 md:text-xl">
                <span className="">
                  <FcApproval />
                </span>
                <span className="">Project Funding</span>
              </p>
            </div>
            <div className="flex justify-start gap-6 md:gap-14 items-center mb-6">
              <p className="flex justify-center items-center gap-3 md:text-xl">
                <span className="">
                  <FcApproval />
                </span>
                <span className="">Healthcare Assistance</span>
              </p>
              <p className="flex justify-center items-center gap-3 md:text-xl">
                <span className="">
                  <FcApproval />
                </span>
                <span className="">Charity Campaigns</span>
              </p>
            </div>
            <div className="flex justify-start gap-6 md:gap-14 items-center mb-6">
              <p className="flex justify-center items-center gap-3 md:text-xl">
                <span className="">
                  <FcApproval />
                </span>
                <span className="">Disaster Relief Support</span>
              </p>
              <p className="flex justify-center items-center gap-3 md:text-xl">
                <span className="">
                  <FcApproval />
                </span>
                <span className="">Crowdfunding Solutions</span>
              </p>
            </div>
            <div className="">
              <Link to="/allcampaign">
                {" "}
                <button className="py-3 px-6 rounded-full bg-[#ff5103] text-white">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
