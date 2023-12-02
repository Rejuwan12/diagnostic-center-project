

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cetagory = ({tests}) => {
  
  const [allTest, setAllTest] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/allTests')
    .then(res => res.json())
    .then(data => {
      if(tests){
        const testCard = data?.filter(test => test.title_name.toLowerCase().includes(tests.toLowerCase()))
      return  setAllTest(testCard)
         
        }
        setAllTest(data)
      }
   
    )},[tests])


  // useEffect(()=>{
   
  // console.log(testCard);
  //  setAllTest(testCard)
  
  // },[allTest, tests])
  return (
    <section className="text-center items-center">
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
   
    </section>
  );
};

export default Cetagory;
