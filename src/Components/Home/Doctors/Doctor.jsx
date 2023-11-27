/* eslint-disable react/prop-types */


const Doctor = ({doctor}) => {
    
    const {doctor_img, doctor_name, doctor_jobs} = doctor;
    return (
        <div>
               <img className='rounded-full ml-14 lg:ml-9 p-2 bg-[#5595a79c]' src={doctor_img} alt="" data-aos="flip-down"
     data-aos-duration="3000" />
            <p className='text-center mt-2 font-semibold text-lg' data-aos="flip-down"
     data-aos-duration="3000">{doctor_name}</p>
          <p className='text-center text-[#176B87]' data-aos="flip-down"
     data-aos-duration="3000"> {doctor_jobs}</p>
        </div>
    );
};

export default Doctor;