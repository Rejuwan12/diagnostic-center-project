
import {FaClock,  FaDoorClosed, FaLocationArrow, } from 'react-icons/fa';

const Opening = () => {
    return (
       <div>
       
         <div className="flex justify-evenly gap-10  mb-8 text-center items-center" >
            <div className="bg-red-500 p-6 flex rounded-lg w-[354px] h-[100px]">
                <div className=''>
                    <FaClock/>
                </div>
               <div>
               <h2 className="font-bold">Opeening Hourse</h2>
                <p className="font-medium text-[#FFF]">Open 9.00 am to 5.00pm Everyday</p>
               </div>
            </div>
            <div className="bg-orange-500 flex p-6 rounded-lg w-[354px] h-[100px]">
                <div>
                    <FaLocationArrow/>
                </div>
                <div>
                <h2 className="font-bold">Our Location</h2>
                <p className="text-[#FFF]">Dhanmondi, Dhaka, Bangladesh </p></div>
            </div>
            <div className="bg-orange-300 flex p-6 rounded-lg w-[354px] h-[100px]">
          <div>
            <FaDoorClosed/>

          </div>
          <div>
          <h2 className="font-bold">Closing Hourse</h2>
            <p className="text-[#FFF]">Close 5.00 pm to 4.00am Everyday</p>
          </div>
            </div>
        </div>
       </div>
    );
};

export default Opening;