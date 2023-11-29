import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ApppoinService from "./ApppoinService";




const AppoinCard = () => {
    const [service , setService] = useState([]);
    useEffect(()=>{
       fetch('service.json')
       .then(res => res.json())
       .then(data => setService(data))
    },[])
    return (
        <div>
            <section>
               <SectionTitle
               heading={'Please select a service.'}
               />

            <div className="grid grid-cols-3 gap-6">
            {
                service.map(service => <div key={service._d} 
                 className="card card-side bg-white cursor-pointer mb-8 shadow-2xl">
                <figure className=""><img className="rounded-es-badge w-20 h-16 object-cover " src={service.img} alt="Movie"/></figure>
                <div className="card-body">
                  <h3 className="card-title text-center items-center">{service.title}</h3>
                </div>
              </div>)
               } 
            </div>



            </section>
            <ApppoinService/>
        </div>
    );
};

export default AppoinCard;