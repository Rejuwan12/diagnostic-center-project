
import { useLoaderData } from "react-router-dom";
import useUsers from "../../../Hooks/useUsers";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";



const TestDetails = () => {
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic();
  const data = useLoaderData();
  const { title_name, 
    name,
    
    description, 
    img_url
    ,price,
    posting_time,
    deadline} = data;
  

 
  const [singleUser, isLoading] = useUsers();
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  console.log(singleUser);
  const userObj = { ...singleUser[0] };
  console.log(userObj);
  const { status } = userObj;
  console.log(status);

  const handleBlocked= () => {
    Swal.fire({
      title: "user blocked",
      icon: "question"
    })
  }
  const info = {
    title_name: title_name,
    deadline:deadline,
    price: price,
    img_url: img_url,
    email: user?.email
  }
  const handleBook= ()=>{
    axiosPublic.post('/bookTests', info )
    .then(res => {
      console.log(res.data);
      Swal.fire({
        title: "Test Booking Success",
        text:` Please Go You Dashboard and Pay $ ${data.price}`,
        icon: "success"
      })
      window.location.reload()
    })

  }
  


  
  return (
    <div>
     
     <div className="card sm:w-96 md:w-full  mb-4 max-h-screen bg-base-100 shadow-xl">
        <figure>
          <img
            src={img_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
            <h2 className="font-bold text-blue-500 text-center bg-sky-300 p-2 rounded-full w-1/6">Posted By:{name}</h2>
            
          <h2  className="card-title">
            {title_name}
            <div className="badge badge-secondary">$:{price}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-between text-center items-center">
          <p className="bg-orange-400 p-2 w-1/6 rounded-xl text-white"> Started Deadline: {posting_time}</p>
            <h2 className="bg-red-400 p-2 rounded-xl">Deadline: {deadline}</h2>
            
            { status == 'block' ? 
            <button onClick={handleBlocked} className="btn btn-outline btn-success ">Book Now</button> : <button onClick={handleBook} className="btn btn-outline btn-success ">Book Now</button>}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default TestDetails;
