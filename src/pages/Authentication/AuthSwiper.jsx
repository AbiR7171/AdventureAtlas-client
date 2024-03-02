
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from "../../assets/images/travel-concept-with-baggage.jpg"



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
        <SwiperSlide><img src={image1} className='h-[450px] rounded-3xl' alt="" /></SwiperSlide>
      </Swiper>
            
        </div>
    );
};

export default AuthSwiper;