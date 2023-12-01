import banner from "../../../images/banner2.jpg";
import { FaSearch } from "react-icons/fa";
import Cetagory from "../../Components/Home/Cetagory/Cetagory";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AllTest = () => {
 
  return (
    <div>
      <div className="space-x-14">
        <div className="relative">
          <img
            src={banner}
            className="w-full h-[150px] object-cover lg:h-[405px]"
            alt=""
          />
        </div>
        <div className="absolute lg:top-[160px]  top-[120px] text-white">
          <h1
            className="lg:text-4xl text-2xl ml-2  top-8 text-green-200 
            font-bold flex lg:ml-[320px] "
          >
            {" "}
            Search Your Test
          </h1>

          <div>
            <form>
              <div className="join ml-80">
                <input
                  className="input input-bordered border-none text-blue-300 join-item"
                  placeholder="Email"
                />
                <button className="btn join-item rounded-r-full">
                  {" "}
                  <FaSearch />
                  Search
                </button>
              </div>
            </form>
          </div>
       
        </div>
      </div>
      <Cetagory/>
    </div>
  );
};

export default AllTest;
