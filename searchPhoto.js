import React, { useState, useEffect} from "react";
import saveAs from 'file-saver'

function SearchPhotos() {
    const [image, setImg] = useState("");
    const [res, setRes] = useState([]);
    const changePhoto = async () => {
        const data = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=Bh-g-5zPlscP4dp1ZmlEFe8e_7Ij2cY4dsMvWrve3GU&per_page=20`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        console.log(result);
        localStorage.setItem("imagename",image)
        setRes(result);
      };

    useEffect(() => {
    changePhoto();
    }, [image]);

    const downloadImage = () => {
    saveAs('res.links.download_location') 
    }

  return (
    <>
        <form className="form d-flex" >
            <label className="label" htmlFor="query">
            {" "}
            📷
            </label>
            <input
                type="text"
                name="query"
                className="input"
                placeholder="Search Anything..."
                value={image}
                onChange={(e) => {
                setImg(e.target.value)}}
            />
        </form>
        <div className="row col-12 d-flex justify-content-evenly flex-wrap">
            {res.map((value) => { 
                return (
                <div class="col-lg-3 col-md-4 col-6">
                    <img class="img-fluid img-thumbnail d-block mb-4 h-100" width="300" height="200" src={value.urls.small} alt='' />
                    <h5 class="card-title">UserName: {value.user.username}</h5>
                    <p class="card-text">Likes:{value.likes}</p>
                    <button onClick={(e)=>downloadImage(e)}>Download</button>
                </div>
                )
            })}
        </div> 
   
    </>
  );
}
export default SearchPhotos