import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    if (banners.length === 0) {
      fetch("https://diagonostik-project-server.vercel.app/banners")
        .then((res) => res.json())
        .then((data) => setBanners(data))
        .catch((error) => console.error("Error fetching banners:", error));
    }
  }, [banners]);
  console.log(banners);

  const banner = banners?.find((banner) => banner.isActive === "true");
  console.log(banner)

  return (
    <div className="z-10 ">
      
      {
        <div
          key={banner?._id}
          className="hero w-[400px] md:w-[740px] lg:w-full mx-auto bg-teal-200 rounded-b-lg mb-32"
        >
          <div
            className="hero w-full h-[230px] md:h-[530px] rounded-lg"
            style={{ backgroundImage: `url(${banner?.image})` }}
          >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-7xl">
                <p className="mb-5 text-2xl md:text-4xl lg:text-7xl font-extrabold text-red-400">
                  {banner?.bannerTitle}
                </p>
                <p className="mb-5   font-medium">
                  {banner?.description}
                </p>
                
                <h1 className="text-3xl font-bold my-3">
                  Use a Coupon Code After {" "}
                  <span className="text-red-600">{banner?.couponRate}%</span>{" "}
                  Discount
                </h1>
                <h1 className="text-2xl bg-purple-500-300 rounded-xl">
                  Coupon Code : {banner?.couponCodeName}
                </h1>
                <div className="form-control ">
                  <div className="input-group flex justify-center mx-auto mt-4">
                  
                  </div>
                  <NavLink
                    to="/allTest"
                    className="btn btn-success bg-orange-600500 mt-6 w-64 flex justify-center mx-auto text-white"
                  >
                  Go To  All Test
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Banner;
