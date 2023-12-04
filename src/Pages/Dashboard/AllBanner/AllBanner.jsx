// import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";


const AllBanner = () => {

    const axiosPublic = useAxiosPublic()
    const [banners, setBanners] = useState([])
    const [remainingBanner, setRemainingBanner] = useState(banners)


    useEffect(() => {
        fetch('https://diagonostik-project-server.vercel.app/banners')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])


    const handleDelete = async id => {
        console.log(id)
        await axiosPublic.delete(`/banners/${id}`)
            .then(data => {
                console.log("data", data);
                if (data.deletedCount > 0) {
                    const remainingItems = remainingBanner?.filter(item => item._id !== id);
                    Swal.fire({
                        title: "Banner Deleted Success!",
                        text: "Your Banner successfully.",
                        icon: "success",
                      });
                    console.log('Cart Items', remainingItems);
                    setRemainingBanner(remainingItems);
                   
                }
            })
    }

    return (
        <div className="p-6 ">
            <SectionTitle
                heading={'All Banners'}
            >
            </SectionTitle>

            <div className="overflow-x-auto p-4">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Details</th>
                            <th>Active</th>
                            <th>Coupon Code</th>
                            <th>Coupon Rate</th>
                            {/* <th>Update</th> */}
                            <th>Delate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            banners.map(banner => <tr key={banner._id}>
                                <th><div className="avatar">
                                    <div className="rounded-2xl">
                                        <img src={banner?.image} />
                                    </div>
                                </div></th>
                                <td>{banner?.bannerName}</td>
                                <td>{banner?.bannerTitle}</td>
                                <td>{banner?.description}</td>
                                <td>{banner?.isActive}</td>
                                <td>{banner?.couponCodeName}</td>
                                <td>{banner?.couponRate}</td>
                                {/* <td><NavLink to='/update' className='bg-blue-600 btn  text-white'>Update</NavLink></td> */}

                                <td><button onClick={() => handleDelete(banner?._id)} className="btn bg-red-600">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBanner;