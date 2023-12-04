import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Doctor from "./Doctor";


const Doctors = () => {
    const [team, setTeam] = useState([]
        )
        useEffect(()=>{
            fetch('doctors.json')
            .then(res => res.json())
            .then(data => setTeam(data))
        },[])
        console.log(team);
    return (
        <div>
            <SectionTitle
            heading={'Our Expert Doctors'}
            />
            <div>
            
              

               <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 py-4">
               {
                    team?.map(doctor => <Doctor key={doctor._id} doctor={doctor}/>)
                }
               </div>
            
        </div>
            </div>
        
    );
};

export default Doctors;