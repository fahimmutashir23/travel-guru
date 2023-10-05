import { FaArrowRight } from "react-icons/fa";
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle"
import SwiperBtn from "../../Components/SwiperBtn/SwiperBtn";
import { Link, useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";
AOS.init();

const Home = () => {

  const data = useLoaderData()
  const [contentData, setContentData] = useState({})

  const handleClick = (id) =>{
    const findData = data.find(oneData=> oneData.id === id);
    setContentData(findData)
  } 
  
  return (
    <div className="grid grid-cols-3 gap-9 text-white max-w-6xl mx-auto mt-24">

      <section className="space-y-4" data-aos="fade-right">
        <h1 className="text-6xl font-babe">{contentData.spot_name}</h1>
        <p className="font-mono text-justify">
          {
            contentData.description?.slice(0,200)
          }
        </p>
        {
          contentData.id && <Link to={`/booking/${contentData.id}`} className="btn px-5 py-2 border-none bg-yellow-500 rounded-md font-mono">
          Booking
          <span>
            <FaArrowRight></FaArrowRight>
          </span>
        </Link>
        }
      </section>

      <section className="col-span-2" data-aos="fade-left">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={3}>

          {
            data.map(oneData => <SwiperSlide
            key={oneData.id}
             className="p-2">
            <Link
              onClick={()=>handleClick(oneData.id)}
              className="hero h-[340px] rounded-2xl relative hover:scale-[1.05] transition 1s"
              style={{ backgroundImage: `url(${oneData.vertical_banner_image})` }}>
              <div className="h-20 w-full bg-black absolute bottom-0 bg-opacity-70 rounded-b-2xl font-babe text-3xl p-3">{oneData.spot_name}</div>
            </Link>
          </SwiperSlide>)
          }  
          <SwiperBtn></SwiperBtn>
        </Swiper>
      </section>
    </div>
  );
};

export default Home;
