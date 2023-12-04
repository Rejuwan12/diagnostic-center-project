import pic1 from "../../../../images/banner2.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="space-x-14">
      <div className="relative">
    
       <img
          src={pic1}
          className="w-full h-[250px] object-cover lg:h-[625px]"
          alt=""
        />
    
      </div>
      <div className="absolute lg:top-[240px] top-[100px] text-white">
        <h1 className="lg:text-5xl text-2xl ml-2  top-8 text-[#01d9fffc] 
        font-bold flex lg:ml-[250px] ">
          The Health is Weath  <br /> Wealth is Health
        </h1>
        <p className="lg:ml-[200px] lg:mt-2  lg:mb-2 p-2 font-normal text-black">
          {" "}
          Whatever your life’s work is, do it well. A man should do his job{" "}
          <br /> so well that the living, the dead, and the unborn could do it
          no better.
        </p>
        <button className="btn  btn-success">
           Go To All Test
        </button>
        <div className="">
           <button className="btn btn-ghost">12kh</button>
             <h2 className="font-bold text-black">Use Coupon Code After 20% Discount!</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
