import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Contact = () => {
    return (
        <div>
            

            <SectionTitle
             heading={'Contact With Us'}
            ></SectionTitle>
            <div className=" p-20 rounded-lg  w-[400px] md:w-[740px] lg:w-full mx-auto flex items-center justify-center">
                <div className="p-2  bg-pink-300  rounded-2xl w-full ">
                    <form>
                        <div className="">
                            <label className="block mb-2"></label>
                            <input className="w-full rounded-lg border-black-300 p-3 " type="text" placeholder="Name" name="name" required />
                        </div>

                        <div className="mb-10">
                            <label className="block mb-2"></label>
                            <input className="w-full rounded-lg  border-gray-300 p-3" type="email" placeholder="Email" name="email" required />
                        </div>

                        <div className="mb-8">
                            <label className="block mb-2" ></label>
                            <textarea className="w-full rounded-lg  border-orange-200 p-2" name="message" placeholder="Message" rows="4" required></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button className="btn  btn-outline btn-info  text-white p-4 w-80 rounded-lg" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;