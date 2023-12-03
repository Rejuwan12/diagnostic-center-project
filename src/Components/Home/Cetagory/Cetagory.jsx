

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cetagory = ({tests}) => {
  const [page, setPage] = useState(0);
  const [lengths, setLengths] = useState([]);
  const [allTest, setAllTest] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/allTests?page=${page}`)
    .then(res => res.json())
    .then(data => {
      if(tests){
        const testCard = data?.result?.filter(test => test.title_name.toLowerCase().includes(tests.toLowerCase()));
      return  setAllTest(testCard)
         
        }
        setLengths(data?.dataLength)
        setAllTest(data?.result)
      }
   
    )},[tests,page])

    const totalPage = Math.ceil(lengths?.length / 3);

    const pages = [...new Array(totalPage).fill(0)];
  // useEffect(()=>{
   
  // console.log(testCard);
  //  setAllTest(testCard)
  
  // },[allTest, tests])
  return (
    <section className="">
      <SectionTitle heading={"---Available Tests---"} />
    <div className="grid grid-cols-1 p-4 md:grid-cols-3 gap-8">
    {
      allTest.map(test =>  <div key={test._id}>
      
          
            <div className="card w-full h-[600px] bg-base-100 shadow-xl">
              <figure>
                <img
                className="w-full h-[200px]"
                  src={test.img_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{test.title_name}</h2>
                <h3>:{test.posting_time}</h3>
                <h3>Deadline:{test.deadline}</h3>
                <p>{test.description}</p>
                <div className="card-actions justify-between">
                <button className="btn btn-outline">Price:${test.price}</button>
                  <Link to={`/allTests/${test._id}`}>
                  <button className="btn btn-outline btn-secondary">Details</button>
                  </Link>
                </div>
              </div>
            </div>
            
          
      </div>
      )
     }
    </div>
   <div className="mt-8 mb-8 flex justify-center items-center gap-2">
   <button
              className={""}
              onClick={() => setPage(page > 0 ? page - 1 : 0)}
            >
              <pre>Previous</pre>
            </button>
   {pages.map((item, index) => (
              <button
                className={`w-7 h-7 flex justify-center items-center border border-[#7cb518] rounded-full ${
                  index === page ? "bg-[#7cb518]" : "bg-white"
                }`}
                key={index}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={""}
              onClick={() =>
                setPage(page < pages.length - 1 ? page + 1 : pages.length - 1)
              }
            >
             <p>Next</p>
            </button>
   </div>
    </section>
  );
};

export default Cetagory;
