import React, { useState, useContext, useEffect } from "react";
import "./topCreators.css";
import Heading from "../../../container/Heading/Heading";
import CreatorCard from "../../../container/Creator/CreatorCard";
import { web3GlobalContext } from "../../../context/global-context";
import { getTopCreators } from "../../../services/APIManager";
import Image1 from "../../../assets/images/s1.jpg";

function TopCreator(props) {
  const [topCreator, setTopCreator] = useState();

  const { walletAddress } = useContext(web3GlobalContext);

  const TopCreator = async () => {
    try {
      
      const creatorRes = await getTopCreators();
      console.log("creatorRes", creatorRes);
      setTopCreator(creatorRes.data)
    } catch (e) {
      console.log("error in getting top creator", e);
      return;
    }
  };

  useEffect(() => {
    if (walletAddress) {
      TopCreator();
    }
  }, [walletAddress]);
  return (
    <div className="top-creator">
      <Heading title="Top Creators" />
      <div className="creator-list">
      {topCreator?.map((item,index)=>{
        return(
    
          <div className="c-card">
            <img src={item.profile.img? item.profile.img :Image1} alt="" className="creator-img" />
            <div className="creater-right">
              <div className="c-name">{item.name}</div>
              <div className="c-eth">{item.user_id}</div>
            </div>
          </div>
  
        )
      })}
       </div>
      <div className="view-btn">
        <button className="view-more">
          View More <span style={{ marginLeft: 5 }}> &rarr; </span>
        </button>
      </div>
    </div>
  );
}

export default TopCreator;
