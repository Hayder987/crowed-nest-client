import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Autoplay,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { CirclesWithBar } from "react-loader-spinner";
import { Rating } from "@smastrom/react-rating";

const ReviewSection = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://crowd-nest-server-eight.vercel.app/recentReview").then((res) => {
      setReview(res.data);
      setLoading(false);
    });
  }, []);
  console.log(review);

  return (
    <div className="container mx-auto mb-16 md:mb-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
      Voices of Kindness
      </h1>
      <p className="text-base w-full md:w-3/4 mx-auto lg:text-xl text-center mb-12 md:mb-16">
        At Crowd Nest, we empower dreams by connecting passionate individuals
        with a supportive community of backers. Our platform fosters innovation,
        collaboration, and positive change
      </p>
      <div className="">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={2000}
          className="mySwiper"
        >
          {loading ? (
            <div className="flex justify-center">
              <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                outerCircleColor="#4fa94d"
                innerCircleColor="#4fa94d"
                barColor="#4fa94d"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : (
            <div className="">
              {review.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div className="py-6 px-10  flex flex-col justify-center items-center font-semibold mb-8 ">
                    <p className="text-center text-3xl mb-10">
                      <Rating style={{ maxWidth: 250 }} value={item?.rating} readOnly />
                    </p>
                    <h1 className="text-center uppercase text-2xl font-semibold mb-6">{item?.name}</h1>
                    <p className="mb-4 text-gray-500 text-center text-xl w-full md:w-9/12 lg:w-7/12">{item?.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
