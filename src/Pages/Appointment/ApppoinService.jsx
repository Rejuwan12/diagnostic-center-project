import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const ApppoinService = () => {
    const [service , setService] = useState([]);
    useEffect(()=>{
       fetch('service.json')
       .then(res => res.json())
       .then(data => setService(data))
    },[])
    return (
        <div>
            <SectionTitle
            heading={'available appointments'}
            />

            <div className="grid grid-cols-3 gap-8 py-4">
                {
                    service.map(service =>  <div key={service._id} className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={service.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{service.title}</h2>
                      <p className="font-semibold">Deadline:{service.deadline}</p>
                      <div className="card-actions">
                        <button className="btn btn-outline btn-success text-orange-600">Book Appointment</button>
                      </div>
                    </div>
                  </div> )
                }
            </div>
           
        </div>
    );
};

export default ApppoinService;