import React, { useState, useEffect,useRef } from "react";
import Load from "../Loading/Load";

const index = () => {
    
    const [data, setData] = useState([]);
    const cardRef = useRef()
  async function getAllPost() {
    const Response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await Response.json();
    setData(result);
  }
  useEffect(() => {
    getAllPost();
    console.log(data);
  }, []);
  return (
    <>
      {data.length > 0 ? (
        data.map((item) => {
          return (
            <>
                  <div className="card w-50 mt-4 p-5 shadow mx-auto" ref={cardRef} onClick={() => {
                      console.log(cardRef.current.classList.toggle('bg-info'));
              }}>
                <h4>{item.title}</h4>
                <h6 className="mt-4">{item.body}</h6>
              </div>
            </>
          );
        })
      ) : (
        <Load/>
      )}
    </>
  );
};

export default index;
