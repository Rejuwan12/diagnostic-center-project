import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules'
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css"
import SectionTitle from '../../SectionTitle/SectionTitle';

const Reviews = () => {
    const [reviews , setReviews] = useState([]);
    useEffect(() =>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    console.log(reviews);
    return (
        <div>
            <SectionTitle
            heading={'what our client say'}
            />
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
       {
        reviews.map(review => <SwiperSlide
        key={review._id}>
            
           <div className="flex flex-col items-center mx-24 my-8">
           <Rating
            style={{maxWidth: 180}}
            value={review.rating}
            readOnly
            
            
            />
            <p className="py-8">
                {review.title}
            </p>
            <h3 className="text-3xl text-orange-600">{review.name}</h3>
           </div>


        </SwiperSlide> )
       }
      </Swiper>
        </div>
    );
};

export default Reviews;