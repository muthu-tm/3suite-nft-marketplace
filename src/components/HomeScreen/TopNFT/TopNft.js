import React,{useState,useEffect} from "react";
import "./topNft.css";
import Heading from "../../../container/Heading/Heading";
import NftCard from "../../../container/NFTCard/NftCard";
import { BsHandbagFill } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { IconContext } from "react-icons";
import NFT1 from "../../../assets/images/n1.jpg";
import NFT2 from "../../../assets/images/n2.jpg";
import NFT3 from "../../../assets/images/n3.jpg";
import NFT4 from "../../../assets/images/n4.jpg";
import NFT5 from "../../../assets/images/n5.jpg";
import NFT6 from "../../../assets/images/n6.jpg";
import NFT7 from "../../../assets/images/n7.jpg";
import NFT8 from "../../../assets/images/n8.jpg";
import NFT9 from "../../../assets/images/n9.jpg";
import NFT10 from "../../../assets/images/n10.jpg";
import NFT11 from "../../../assets/images/n11.jpg";
import NFT12 from "../../../assets/images/n12.jpg";

import Image1 from "../../../assets/images/s1.jpg";
import Image2 from "../../../assets/images/s2.jpg";
import Image3 from "../../../assets/images/s3.jpg";
import Image4 from "../../../assets/images/s4.jpg";
import Image5 from "../../../assets/images/s5.jpg";
import Image6 from "../../../assets/images/s6.jpg";
import Image7 from "../../../assets/images/s7.jpg";
import { Tooltip } from "antd";
import { getTopAssets } from "../../../services/APIManager";
import { useNavigate } from "react-router-dom";

function TopNft(props) {
  const navigate = useNavigate()
  const [topAssets, setTopAssets] = useState();

  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  const getAssets = async () => {
    try {

      let res = await getTopAssets();
      console.log("getAssets", res);

      if (res.status) {

        setTopAssets(res.data);
      }
    } catch (e) {
      console.log("getTopAssets", e);
      return false;
    }
  };

  useEffect(() => {
    getAssets();
  }, []);

  const moveSingleNFTPage = async (id) => {
    navigate(`/nft/${id}`, { state: id });
  };

  return (
    <>
      <div className="t-nft">
        <Heading title="Top NFTs" />
        <div className="nft-colln">
        {topAssets?.map((nft, index) => {
                const unixSeconds = Number(nft.created_at._seconds);
                const unixMilliSeconds = unixSeconds * 1000;
                const myDate = new Date(unixMilliSeconds);
                const regTime = myDate.toDateString();
              let  registerationTime = regTime.slice(3);
                // onClick={()=>moveSingleNFTPage(nft.id)}
                return (
                  <div className="nft-card">
                    <img src={isValidUrl(nft.asset) ? nft?.asset :NFT5} alt="" className="nft-img" />
                    <div className="desc-sec">
                      <div className="name">{nft.name}</div>
                      <div className="buy-btn">Mint</div>
                    </div>
                    <div className="desc-sec">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={Image3} alt="" className="user-img" />
                        <div>
                          <div className="owned">{nft.owner?.name ? "Owned By" : "Created By"}</div>
                          <div className="creator-name">{nft.owner?.name || nft.creator?.name}</div>
                        </div>
                      </div>
                      <div>
                        <div className="owned">Price</div>
                        <div className="creator-name">2.75ETH</div>
                      </div>
                    </div>
                    <div style={{ marginTop: 8 }} />
                  </div>
                );
              })}
        </div>
        <div className="view-btn">
          <button className="view-more">
            View More <span style={{ marginLeft: 5 }}> &rarr; </span>
          </button>
        </div>
      </div>
      <div className="t-nft">
        <Heading title="Top Category" />

        <div className="nft-colln">
          
          
              {topAssets?.map((nft, index) => {
                const unixSeconds = Number(nft.created_at._seconds);
                const unixMilliSeconds = unixSeconds * 1000;
                const myDate = new Date(unixMilliSeconds);
                const regTime = myDate.toDateString();
              let  registerationTime = regTime.slice(3);
                // onClick={()=>moveSingleNFTPage(nft.id)}
                return (
                  <div className="nft-card">
                    <img src={isValidUrl(nft.asset) ? nft?.asset :NFT5} alt="" className="nft-img" />
                    <div className="desc-sec">
                      <div className="name">{nft.name}</div>
                      <div className="buy-btn">Mint</div>
                    </div>
                    <div className="desc-sec">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={Image3} alt="" className="user-img" />
                        <div>
                          <div className="owned">{nft.owner?.name ? "Owned By" : "Created By"}</div>
                          <div className="creator-name">{nft.owner?.name || nft.creator?.name}</div>
                        </div>
                      </div>
                      <div>
                        <div className="owned">Price</div>
                        <div className="creator-name">2.75ETH</div>
                      </div>
                    </div>
                    <div style={{ marginTop: 8 }} />
                  </div>
                );
              })}
        
        
        </div>

        <div className="view-btn">
          <button className="view-more">
            View More <span style={{ marginLeft: 5 }}> &rarr; </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default TopNft;
