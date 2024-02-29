
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from "../../assets/images/signUpBackground.jpg"
import image2 from "../../assets/images/Screenshot_1.png"
import image3 from "../../assets/images/united-states-america-map-with-flag.jpg"
import image5 from "../../assets/images/rear-view-happy-hiking-family-embracing.jpg"


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AuthSwiper = () => {
    return (
        <div className='rounded-md'>
              <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} className='h-[550px] rounded-md' alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" className='h-[550px] rounded-md' /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" className='h-[550px] rounded-md' /></SwiperSlide>
        <SwiperSlide><img src={image5} alt="" className='h-[550px] rounded-md' /></SwiperSlide>
      </Swiper>
            
        </div>
    );
};

export default AuthSwiper;