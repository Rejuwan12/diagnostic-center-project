import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import AppoinSubmit from "./AppoinSubmit";
import useUsers from "../../Hooks/useUsers";
import Swal from "sweetalert2";

const ApppoinService = () => {
  const [service, setService] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const [singleUser, isLoading] = useUsers();
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  
  const userObj = { ...singleUser[0] };
 
  const { status } = userObj;
 

  const handleBlocked= () => {
    Swal.fire({
      title: "user blocked",
      icon: "question"
    })
  }
  return (
    <div>
      <SectionTitle heading={"available services"} />

      <div className="grid grid-cols-3 gap-8 py-4">
        {service.map((service, i) => (
          <div key={service._id} className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{service.title}</h2>
              <p className="font-semibold">Deadline:{service.deadline}</p>
              <div className="card-actions">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
               {
                status == 'block' ? 
                 <button
                className="btn btn-outline btn-success"
                onClick={handleBlocked}
              >
                Book Appoinment
              </button>
              :
              <button
              className="btn btn-outline btn-success"
              onClick={() =>
                document.getElementById(`my_modal_${i}`).showModal()
              }
            >
              Book Appoinment
            </button>
               }
                <dialog
                  id={`my_modal_${i}`}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <AppoinSubmit heading={service?.title} />
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-outline border-none btn-warning bg-red-500">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApppoinService;
