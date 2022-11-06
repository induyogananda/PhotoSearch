import React, { useState, useEffect } from "react";
import './Home.css'
import saveAs from 'file-saver'


function Home() {
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=nature&client_id=Bh-g-5zPlscP4dp1ZmlEFe8e_7Ij2cY4dsMvWrve3GU&per_page=20`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };
  useEffect(() => {
    fetchRequest();
    }, []);
    
  const downloadImage = () => {
    saveAs('res.links.download_location') 
  }
  return (
    <div>
      <div className="row col-12 d-flex flex-wrap">
        {res.map((value) => {
          return (
            <div className="col-3 col-lg-3 col-md-4 col-6">
              <img src={value.urls.small} className="img-fluid img-thumbnail" width="300" height="200" alt="..." />
              <h5 class="card-title">UserName: {value.user.username}</h5>
              <p class="card-text">Likes:{value.likes}</p>
              <button onClick={(e)=>downloadImage(e)}>Download</button>
            </div>
        )})
      }
      </div>
    </div>
  )
}
export default Home