import React, { useContext,useState,useEffect } from "react";
import "./category.css";
import Heading from "../../container/Heading/Heading";
import Art from "../../assets/images/art.jpg";
import Photography from "../../assets/images/photography.jpg";
import Music from "../../assets/images/music.png";
import Gaming from "../../assets/images/gaming.png";
import { web3GlobalContext } from "../../context/global-context";
import { getAppConfig } from "../../services/APIManager";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate()
  const { walletAddress, chainGlobal } = useContext(web3GlobalContext);
  const [tags, setTags] = useState([]);

    const loadInfo = async () => {
    try {
      let filterRes = await getAppConfig();
      setTags(filterRes.data.tags);
    } catch (error) {
      console.log("error", error);

      return false;
    }
  };
    useEffect(() => {
    if (walletAddress) {
      loadInfo();
    }
  }, [walletAddress]);


  function onViewMoreClick() {
    navigate(`/explore`, { state: "category" });
  }
  return (
    <div className="exp-cat">
      <Heading title="Top Categories" />

      <div className="all-cat">
            {tags?.map((item,index)=>{
      return(

         <div className="single-cat" style={{display:index>3?"none":""}}>
          <img src={item.img} alt="" className="cat-img" />
          <div className="cat-name">{item.name}</div>
        </div>
      )
    })}
       </div>
       <div className="view-btn">
          <button className="view-more" onClick={onViewMoreClick}>
            View More <span style={{ marginLeft: 5 }}> &rarr; </span>
          </button>
        </div>
      </div>
  
  );
}

export default Category;
