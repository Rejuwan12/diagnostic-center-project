import pic1 from "../../../../images/slide3.jpg";
import pic2 from "../../../../images/slide4.jpg";
import pic3 from "../../../../images/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import SectionTitle from "../../SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cetagory = () => {
  const [allTest, setAllTest] = useState([]);
  useEffect(()=>{
    fetch('test.json')
    .then(res => res.json())
    .then(data => setAllTest(data))
  },[])
  return (
    <section className="text-center items-center">
      <SectionTitle heading={"Available Test"} />
    <div className="grid grid-cols-1 p-4 md:grid-cols-3 gap-8">
    {
      allTest.map(test =>  <div key={test._id}>
      
          
            <div className="card w-full h-[600px] bg-base-100 shadow-xl">
              <figure>
                <img
                className="w-full h-[200px]"
                  src={test.img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{test.title}</h2>
                <h3>Date:{test.date}</h3>
                <p>{test.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`testDetails/${test._id}`}>
                  <button className="btn btn-outline btn-secondary">Details</button>
                  </Link>
                </div>
              </div>
            </div>
            
          
      </div>
      )
     }
    </div>
    <Link to={'/allTest'}>
    <button className="btn btn-outline btn-success mt-4">See All Test</button>
    </Link>
    </section>
  );
};

export default Cetagory;
