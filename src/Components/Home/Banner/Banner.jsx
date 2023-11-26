import pic1 from '../../../../images/01.jpg'
import pic2 from '../../../../images/01.jpg'
import pic3 from '../../../../images/01.jpg'
import pic4 from '../../../../images/01.jpg'


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
       <div className=' text-center items-center'>
         <Carousel>
        <div>
            <img src={pic1} />
           
        </div>
        <div>
            <img src={pic2} />
          
        </div>
        <div>
            <img src={pic3} />
           
        </div>
        <div>
            <img src={pic4} />
         
        </div>
        
       
    </Carousel>
       </div>
    );
};

export default Banner;