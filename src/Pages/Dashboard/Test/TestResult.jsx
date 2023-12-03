import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { usePDF } from 'react-to-pdf';

const TestResult = () => {
    const axiosPublic = useAxiosPublic();
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    const { data: bookingTest = [] } = useQuery({
    queryKey: ["boookTest"],
    queryFn: async () => {
      const res = await axiosPublic.get("/bookTests");
      const data = await res.data;
      return data;
    },
   
  })
  console.log(bookingTest);
    return (
        <div>
            <SectionTitle
            heading={'Test result'}/>

             <div className="flex justify-end p-4 ">
            <button onClick={() => toPDF()} className="btn btn-outline  text-red-600">Download PDF</button>
        </div> 

            <div ref={targetRef} >
            <div  className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
        <p className="text-red-600 bg-gray-200 rounded-lg p-1">Total Booking: {bookingTest.length}</p>
          <tr>
            <th>
              #
            </th>
            <th>Test Title & User Name</th>
            <th>Deadline</th>
            <th>Price</th>
            <th>Actions</th>
            <th>User Details</th>
          </tr>
        </thead>
        <tbody>
          
          {bookingTest.map((user, idx) => (

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
                    <div className="text-sm opacity-50">{user.name}</div>
                  </div>
                </div>
              </td>
              <td>
                {user.deadline}
              </td>
              <td>
               $ {user.price}
              </td>
              <td>
              

                
                 <button 
                  className="mr-2 rounded-b-full btn-sm 
                  btn-outline btn-error">pending</button>
                

              </td>
              <th>
              
                <button
                  className="btn btn-outline btn-sm btn-info"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Payment
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                   
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg py-2 text-center ">Pay</h3>
                    
                    
                  </div>
                </dialog>
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

export default TestResult;