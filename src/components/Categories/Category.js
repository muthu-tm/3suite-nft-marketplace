import React from "react";
import "./category.css";
import Heading from "../../container/Heading/Heading";
import Art from "../../assets/images/art.jpg";
import Photography from "../../assets/images/photography.jpg";
import Music from "../../assets/images/music.png";
import Gaming from "../../assets/images/gaming.png";

function Category() {
  return (
    <div className="exp-cat">
      <Heading title="Explore Categories" />
      <div className="all-cat">
        <div className="single-cat">
          <img src={Art} alt="" className="cat-img" />
          <div className="cat-name">Art</div>
        </div>
        <div className="single-cat">
          <img src={Gaming} alt="" className="cat-img" />
          <div className="cat-name">Gaming</div>
        </div>
        <div className="single-cat">
          <img src={Photography} alt="" className="cat-img" />
          <div className="cat-name">Photography</div>
        </div>
        <div className="single-cat">
          <img src={Music} alt="" className="cat-img" />
          <div className="cat-name">Music</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
