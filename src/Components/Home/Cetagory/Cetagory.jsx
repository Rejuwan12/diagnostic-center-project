import pic1 from '../../../../images/slide3.jpg'
import pic2 from '../../../../images/slide4.jpg'
import pic3 from '../../../../images/slide5.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Cetagory = () => {
    return (
        <section className='text-center items-center'>
       <>
            
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper h-[350px]  mb-8"
      >
        <SwiperSlide><img src={pic1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic1} alt="" /></SwiperSlide>
        
        
      </Swiper>
    </>
        </section>
    );
};

export default Cetagory;