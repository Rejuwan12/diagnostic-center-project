import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";

import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const Reservation = () => {
    // const axiosPublic = useAxiosPublic();
    const [tests, setTests] = useState('');
    const [testData, setTestData] = useState([]);
    // useEffect(()=>{
    //     if(tests){
    //         const testCard = data?.result?.filter(test => test.title_name.toLowerCase().includes(tests.toLowerCase()));
    //       return  setAllTest(testCard)
             
    //         }
    // },[])

    useEffect(()=>{
        fetch(`http://localhost:5000/bookTests`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
          if(tests){
            const testCard = data?.filter(test => test.email == tests);
            console.log(testCard);
          return setTestData(testCard)
             
            }
           setTestData(data)
           
          }
       
        )},[tests])


//     const { data: bookingTest = [] } = useQuery({
//     queryKey: ["boookTest"],
//     queryFn: async () => {
//       const res = await axiosPublic.get("/bookTests");
//       const data = await res.data;
//       return data;
//     },
   
//   })
  


  const handleSearchTest = (e)=> {
      e.preventDefault();
    const form = e.target.search.value;
    setTests(form);
  }
    return (
        <div>
            <SectionTitle
            heading={'reservation'}/>
             <form onSubmit={handleSearchTest}>
              <div className="join ml-80">
                <input
                  className="input input-bordered border-none text-blue-300 join-item"
                  placeholder="Email" name="search"
                />
                <button 
                
                className="btn join-item rounded-r-full">
                  {" "}
                  <FaSearch />
                  Search
                </button>
              </div>
            </form>
               <div className="flex justify-end p-4 ">
        </div> 

            <div  >
            <div  className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
        <p className="text-red-600 bg-gray-200 rounded-lg p-1">Total Booking: {testData.length}</p>
          <tr>
            <th>
              #
            </th>
            <th>Test Title & Email Address</th>
            <th>Actions</th>
            <th>Action 2</th>
          </tr>
        </thead>
        <tbody>
          
          {testData?.map((user, idx) => (

            <tr key={user._id}>
              <th>
               {idx + 1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.img_url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.title_name}</div>
                    <div className="text-sm opacity-50">{user.email}</div>
                  </div>
                </div>
              </td>
             
              <td>
              

                
                 <button 
                  className=" btn-sm rounded-xl
                  btn-outline btn-error">Accept</button>
                

              </td>
              <th>
              
                <button
                  className="btn btn-outline  btn-sm btn-info"
                  
                >
                  Delete
                </button>
                
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </div>
        </div>
    );
};

export default Reservation;