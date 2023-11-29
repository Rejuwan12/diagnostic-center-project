import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddTest = () => {
    const {user} = useAuth();
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleAddTest = (e) => {
        e.preventDefault();
        const form = e.target;
        const posted_the_test = form.name.value;
        const test_Title = form.title.value;
        const Posting_Date = form.date.value;
        const Application_Deadline = form.deadline.value;
        const price_range = form.price.value;
        const Applicants_Number = form.number.value;
        const Details_Button = form.description.value;
        const img_url = form.photo.value;
        form.reset();
        if(user && user.email){
            const info = {
              name:posted_the_test,
               title_name:test_Title,
                 posting_time:Posting_Date,
                deadline:Application_Deadline,
               price:price_range,
                slot_number:Applicants_Number,
              img_url: img_url,
             description: Details_Button
             }
            
            axiosSecure.post('allTests', info)
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
                navigate('/allTest')
               
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
             <div className="bg-[#F4F3F0] p-24">
      <div>
        <h1 className="text-3xl font-bold text-center">Add a New Test</h1>
        <p className="text-center mb-10">Enter your details to Add a Test</p>
      </div>
      <form
      onSubmit={handleAddTest}
      >
        {/* form name and quantity row */}
        
        <div className="md:flex gap-8 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="User Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Test Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                placeholder="Test Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div>

        {/* form supplier test row */}

        <div className="md:flex gap-8 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Test Price</span>
            </label>
            <label className="input-group">
              <input
                name="price"
                type="text"
                placeholder="Test Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Posting Date</span>
            </label>
            <label className="input-group">
              <DatePicker
                name="date"
                className=" input input-bordered w-full"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </label>
           
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Deadline</span>
            </label>
            <label className="input-group">
              <DatePicker
                name="deadline"
                className=" input input-bordered w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </label>
            
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex gap-8 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">
               Slot Number
              </span>
            </label>
            <label className="input-group">
              <input
                type="number"
                defaultValue={"0"}
                name="number"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Job Description</span>
            </label>
            <label className="input-group">
              <textarea
                className="textarea  input input-bordered w-full h-[100px]  "
                name="description"
                placeholder="Description"
              ></textarea>
            </label>
          </div>
        </div>
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
          value="Add a Test"
          className="btn btn-outline btn-info w-full bg-slate-600 border-none text-white"
        />
      </form>
    </div>
        </div>
    );
};

export default AddTest;