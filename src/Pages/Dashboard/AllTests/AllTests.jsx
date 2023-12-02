import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

// import useAuth from "../../../Hooks/useAuth";
import useUsers from "../../../Hooks/useUsers";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllTests = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allTest = [], refetch } = useQuery({
    queryKey: ["allTest"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allTests");
      const data = await res.data;
      return data;
    },
  });

  console.log(allTest);

  const [singleUser, isLoading] = useUsers();
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  console.log(singleUser);
  const userObj = { ...singleUser[0] };
  // console.log(userObj);

  const { status } = userObj;
  console.log(status);

 
  const handleDelete = (id) => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/allTests/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Cancelled!",
              text: "Your Test Appointment has been cancelled successfully.",
              icon: "success",
            });
          }
        });
      }
    });
  };

//   const updatedTests= {

//   }

//   const handleUpdater = (id)=>{
//     console.log(id);
//     axiosPublic.put(`/allTests/${id}`,{status: 'block'})
//     .then(res => {
//       console.log(res.data);
//       if(res.data.modifiedCount > 0){
//         refetch()
//         Swal.fire({
//           title: "user blocked",
//           text: "user blocked succesfully!",
//           icon: "success"
//         })


//       }
//     })
//   }

  return (
    <div>
      <SectionTitle heading={"all tests"} />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <p className="text-red-600 text-center bg-gray-200 rounded-lg p-1">
                Total Tests: {allTest.length}
              </p>
              <tr>
                <th>#</th>
                <th>All Services</th>
                <th>Update</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allTest.map((test, idx) => (
                <tr key={test._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={test.img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{test.title_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {" "}
                    
                   <Link to={`/dashboard/updateTest/${test._id}`}>
                   <button
                      className="btn btn-ghost btn-sm
                      text-white bg-green-600" 
                    >
                      Update
                    </button>
                   </Link>
                   
                  </td>
                  <td>
                    <button onClick={() =>handleDelete(test._id)} className="btn btn-ghost btn-sm text-white bg-red-600">Delete</button>
                  </td>
                  
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTests;
