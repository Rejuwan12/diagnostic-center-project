
import { FaNotesMedical } from 'react-icons/fa';
import cover from '../../../images/Appointment2.jpg'
import cover2 from '../../../images/appointmentTime.jpg'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import AppoinCard from './AppoinCard';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            

            <img src={cover} className='w-full h-[350px] mb-10 object-cover' alt="" />
            
            <h1 className='absolute top-48 ml-28 -mt-11 text-5xl font-bold'> <FaNotesMedical/> Appointment...</h1>
            <SectionTitle
            
            heading={'appointment date'}/>
            <div className='flex justify-evenly mt-16 mb-16'>
           
                 <div className=' text-center  items-center'>
                    <h2 className='font-bold'>Pick Your Date</h2>
                 <DatePicker className='bg-blue-300 p-4 rounded-2xl font-bold' selected={startDate} onChange={(date) => setStartDate(date)} />
                 </div>
                 <div>
                  <img src={cover2} className='w-72  h-52 rounded-xl' alt="" />
                 </div>
                 
            </div>
            <AppoinCard/>
        </div>
    );
};

export default Appointment;