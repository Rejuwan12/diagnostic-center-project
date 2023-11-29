import  { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";


const AppoinComming = () => {
  const { user } = useAuth();
  
  const axiosSecure = useAxiosSecure();
  const [appoint, setAppoint] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/appoints/${user?.email}`)
    .then((res) => {
      setAppoint(res.data);
    });
  }, [axiosSecure, user]);

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
        axiosSecure.delete(`/appoint/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
           const datas= appoint.filter(result => result._id!== id);
           setAppoint(datas)
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

  return (
    <div>
      <SectionTitle heading={"Upcoming Appointments"} />
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Appointment Name</th>
              <th>Booking Time</th>
              <th>Booking Date</th>
              <th>Action</th>
              <th>Cancel Booking</th>
            </tr>
          </thead>
          <tbody>
            {appoint.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>{item.appointment_name}</td>
                <td>{item.time}</td>
                <td>{item.date}</td>
                <td>
                  <h2 className="p-2 bg-fuchsia-400 w-2/1 rounded-lg">
                    Pending
                  </h2>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-sm text-white bg-red-600"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppoinComming;