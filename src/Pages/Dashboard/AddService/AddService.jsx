import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const AddService = () => {
    const {user} = useAuth();
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure();
    const [endDate, setEndDate] = useState(new Date());

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const test_Title = form.title.value;
        const Application_Deadline = form.deadline.value;
        const img_url = form.photo.value;
        form.reset();
        if(user && user.email){
            const info = {
             title:test_Title,
             deadline:Application_Deadline,
             img: img_url,
            
             }
            
            axiosSecure.post('service', info)
            .then(res => { 
              console.log(res.data)
              if(res.data.insertedId){
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: ` added to your new test`,
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/appointment')
               
              }
            })
        
          }
          else{
             Swal.fire({
              title: "please login",
              text: "please login and book your appointment",
              icon: "question"
            })
            navigate('/login', { state:{ from: location} })
          }
        }
    
    return (
        <div>
             <div className="bg-[#c0b6969f] rounded-xl p-24">
      <div>
        <h1 className="text-3xl font-bold text-center">Add a New Service</h1>
        <p className="text-center mb-10">Enter your details to Add a new Services</p>
      </div>
      <form
      onSubmit={handleAddService}
      >
        {/* form name and quantity row */}
        
        <div className="md:flex gap-8 mb-4">
         
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-semibold">Service Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                placeholder="Service Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div>

        {/* form supplier test row */}

        <div className="md:flex gap-8 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Deadline</span>
            </label>
            <label className="input-group">
              <DatePicker
                name="deadline"
                className=" input input-bordered w-full"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </label>
            
          </div>
        </div>
        {/* form category and details row */}
        
        
        {/* form photo url row */}
        <div className="">
          <div className="form-control md:w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="
                  Photo URL link"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add New Services"
          className="btn btn-outline btn-success w-full bg-pink-500 border-none "
        />
      </form>
    </div>
        </div>
    );
};

export default AddService;