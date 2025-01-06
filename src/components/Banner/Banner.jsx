import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="mb-16 md:mb-20 ">
      <Swiper
        navigation={false}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {/* slide-1 */}
        <SwiperSlide>
          <div
            className="flex flex-col min-h-[80vh]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co.com/Fm5R5z8/banner-1.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="mb-4 text-4xl md:text-6xl text-center font-bold text-white">
              Fuel Creativity, Fund the Future
            </h1>
            <p className="w-full text-center text-gray-300 lg:w-6/12">
              Help innovators and creators bring their projects to life. Whether
              it’s a film, app, or art project, your support makes the
              impossible possible.
            </p>
            <h3 className=" mt-6">
              <span className="text-[#fdd9c8] text-3xl md:text-5xl font-bold">
                <Typewriter
                  words={["Tech Startups", "Entrepreneurs"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h3>
          </div>
        </SwiperSlide>
        {/* slide-2 */}
        <SwiperSlide>
          <div
            className=" flex flex-col min-h-[80vh]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co.com/cNJcZsX/Innovation-Definition.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="mb-4 text-4xl md:text-6xl text-center font-bold text-white">
              Innovate. Inspire. Impact.
            </h1>
            <p className="w-full text-center text-gray-300 lg:w-6/12">
              Be a part of groundbreaking ideas and help startups launch the
              next big thing. Your contribution fuels innovation and inspires
              the world.
            </p>
            <h3 className=" mt-6">
            <span className="text-[#fdd9c8] text-3xl md:text-5xl font-bold">
            <Typewriter
            words={['Startup Ideas', 'Business Expansion']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1500}
          />
            </span>
          </h3>
          </div>
        </SwiperSlide>
        {/* slide-3 */}
        <SwiperSlide>
          <div
            className=" flex flex-col min-h-[80vh]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co.com/gwLj4hG/banner3.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="mb-4 text-4xl md:text-6xl text-center font-bold text-white">
            Raise Funds, Change Lives
            </h1>
            <p className="w-full text-center text-gray-300 lg:w-6/12">
            Empower individuals and communities by supporting projects that matter—because every life deserves a helping hand.
            </p>
            <h3 className=" mt-6">
            <span className="text-[#fdd9c8] text-3xl md:text-5xl font-bold">
            <Typewriter
            words={['Community Development', 'Personal Needs']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1500}
          />
            </span>
          </h3>
          </div>
        </SwiperSlide>
        {/* slide-4 */}
        <SwiperSlide>
          <div
            className=" flex flex-col min-h-[80vh]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co.com/94PQY8V/banner-4.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="mb-4 text-4xl md:text-6xl text-center font-bold text-white">
            Dream Big, Together We Achieve
            </h1>
            <p className="w-full text-center text-gray-300 lg:w-6/12">
            Join a global network of dreamers and supporters to bring big ideas to life. Together, we achieve greatness!
            </p>
            <h3 className=" mt-6">
            <span className="text-[#fdd9c8] text-3xl md:text-5xl font-bold">
            <Typewriter
            words={['Global Initiatives', 'Multi-National Startups']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
            </span>
          </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
