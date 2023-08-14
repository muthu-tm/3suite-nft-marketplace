import React, { useContext,useState,useEffect } from "react";
import "./category.css";
import Heading from "../../container/Heading/Heading";
import Art from "../../assets/images/art.jpg";
import Photography from "../../assets/images/photography.jpg";
import Music from "../../assets/images/music.png";
import Gaming from "../../assets/images/gaming.png";
import { web3GlobalContext } from "../../context/global-context";
import { getAppConfig } from "../../services/APIManager";

function Category() {
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
  return (
    <div className="exp-cat">
      <Heading title="Explore Categories" />




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

      </div>
  
  );
}

export default Category;
