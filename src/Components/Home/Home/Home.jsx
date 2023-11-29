
import Banner from "../Banner/Banner";

import Doctors from "../Doctors/Doctors";
import Opening from "../Opening/Opening";
import Reviews from "../Reviews/Reviews";



const Home = () => {
    return (
        <div>    
            <Banner/>
            
            <Opening/>
            <Doctors/>
            <Reviews/>
        </div>
    );
};

export default Home;