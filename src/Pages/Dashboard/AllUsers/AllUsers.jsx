import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
// // import useAuth from "../../../Hooks/useAuth";
// import useUsers from "../../../Hooks/useUsers";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import { FaUsers } from 'react-icons/fa';

const AllUsers = () => {
  // const {user} = useAuth();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      const data = await res.data;
      return data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      }
    });
  };








//   const [singleUser, isLoading ] = useUsers();
//   if(isLoading){
//     return <p>Loading.....</p>
//   }
// console.log(singleUser);
// const userObj = {...singleUser[0]};
// // console.log(userObj);

//  const {status } = userObj;
//  console.log(status);
 



  const handleBlockUser = (id)=>{
    console.log(id);
    axiosPublic.put(`/users/${id}`,{status: 'block'})
    .then(res => {
      console.log(res.data);
      if(res.data.modifiedCount > 0){
        refetch()
        Swal.fire({
          title: "user blocked",
          text: "user blocked succesfully!",
          icon: "success"
        })


      }
    })
  }
  
  const handleActiveUser = (id)=>{
    
    axiosPublic.put(`/users/${id}`,{status: 'active'})

    .then(res => {
      console.log(res.data);
      if(res.data.modifiedCount > 0){
        refetch();
        Swal.fire({
          title: "user actived",
          text: "user actived succesfully!",
          icon: "success"
        })


      }
    })
  }



  return (
    <div>
       <SectionTitle
            heading={'all users'}/>
    
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
        <p className="text-red-600 bg-gray-200 rounded-lg p-1">Total User: {allUsers.length}</p>
          <tr>
            <th>
              #
            </th>
            <th>Name & Email</th>
            <th>Action 1</th>
            <th>Action 2</th>
            <th>User Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allUsers.map((user, idx) => (

            <tr key={user._id}>
              <th>
               {idx + 1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.email}</div>
                  </div>
                </div>
              </td>
              <td>{ user.role === 'admin' ? 'Admin' :  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-ghost btn-sm text-white bg-green-600"
                  >
                    <FaUsers />
                  </button>}</td>
              <td>
              

                {
                  user.status == 'block' ? <button onClick={()=>handleActiveUser(user._id)} className="mr-2 rounded-b-full btn-sm 
                  btn-outline btn-success">Active</button> : <button 
                  onClick={()=>handleBlockUser(user._id)} className="mr-2 rounded-b-full btn-sm 
                  btn-outline btn-error">Block</button>
                }

              </td>
              <th>
              
                <button
                  className="btn btn-outline btn-sm btn-info"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  See info
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                   
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg py-2 text-center ">User Info</h3>
                    <p className="py-2 text-start mb-2 text-black p-2 rounded-lg bg-orange-600">User Id: {user._id}</p>
                    <p className="py-2 text-start mb-2 text-black p-2 rounded-lg bg-orange-600">User Name: {user.name}</p>
                    <p className="py-2 text-start mb-2 p-2 rounded-lg text-gray-300 bg-orange-600">Blood Group: {user.blood_group}</p>
                    <p className="py-2 text-start mb-2 text-black p-2 rounded-lg bg-orange-600">Districts: {user.districts}</p>
                    <p className="py-2 text-start mb-2 text-black p-2 rounded-lg bg-orange-600">Upazila: {user.upazila}</p>
                    <p className="py-2 text-start p-2 text-black rounded-lg bg-orange-600">User Photo: {user.photoURL}</p>
                    
                  </div>
                </dialog>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AllUsers;
