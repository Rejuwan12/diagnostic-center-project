
import Contact from "../../../Pages/Dashboard/Contact/Contact";
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
            <Contact/>
        </div>
    );
};

export default Home;