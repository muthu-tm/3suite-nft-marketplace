import React from "react";
import "./singleNft.css";
import NFT7 from "../../assets/images/n3.jpg";
import Image3 from "../../assets/images/s1.jpg";
import Image4 from "../../assets/images/s7.jpg";
import { getEllipsisTxt } from "../../utils/formatter";
import { MdShare } from "react-icons/md";
import { IconContext } from "react-icons";
import Heading from "../../container/Heading/Heading";
import Image2 from "../../assets/images/s2.jpg";
import NFT12 from "../../assets/images/n10.jpg";

function SingleNft(props) {
  return (
    <div className="nftSec">
      <Heading title="Item Detail" />
    <div className="single-nft">
      <div className="sec-l">
        <img src={NFT7} alt="" className="sgl-nft" />
      </div>
      <div className="sec-r">
      <div style={{ display: "flex", alignItems: "center" }}>
          <div className="nft-name">NFT Name </div>
          <IconContext.Provider
            value={{
              size: "1.3em",
              color: "#fff",
              className: "global-class-name",
            }}
          >
            <div style={{ marginLeft: 15,marginTop:10, cursor: "pointer" }}>
              <MdShare />
            </div>
          </IconContext.Provider>
        </div>
        <div className="owner-data">
          <div style={{ display: "flex" }}>
            <img src={Image3} alt="" className="own-img" />
            <div>
              <div className="Name">Created by</div>
              <div className="Wallet">
                {getEllipsisTxt(
                  "0xC4f4Bc698c3090A5aBC23dfCBc50227C25895E9a",
                  9
                )}
              </div>
            </div>
          </div>

          <div style={{ display: "flex"}} className="m5">
            <img src={Image4} alt="" className="own-img" />
            <div>
              <div className="Name">Current Owner</div>
              <div className="Wallet">
                {getEllipsisTxt(
                  "0x72bCE2654500B89FC7876b1973636Ab116Da7C8A",
                  9
                )}
              </div>
            </div>
          </div>
        </div>
       
        <div className="nft-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius
        </div>
        <div className="nft-tags" style={{marginTop:5}}>
          <div  className="rate-btn">1.456ETH</div>
          <div className="nft-single-tag">$3,456</div>
        </div>
    <div className="l-bid">
      Latest bid
    </div>
    <div className="s-bid">
      <div className="user-sec">
        <img src={Image2} alt="" className="bid-img" />
        <div style={{marginLeft:20}}>
          <div className="bid-by">by Adem Smith</div>
          <div className="bid-price"> Placed a bid: <span style={{color:"#ae9023",fontWeight:600}}>1.46ETH</span></div>
        </div>
              </div>
              <div className="s-date">Jun 15 2023</div>
    </div>
    <div className="s-bid">
      <div className="user-sec">
        <img src={NFT12} alt="" className="bid-img" />
        <div style={{marginLeft:20}}>
          <div className="bid-by">by John Wick</div>
          <div className="bid-price"> Placed a bid: <span style={{color:"#ae9023",fontWeight:600}}>1.02ETH</span></div>
        </div>
              </div>
              <div className="s-date">May 27 2023</div>
    </div>
    <div style={{display:'flex',alignItems:'center'}}>
    <div  className="rate-btn">Place Bid</div>
{/* E7009C  */}
<div  className="rate-btn-pink" >Purchase Now</div>

    </div>
        {/* <button className="cnt-wallet" style={{ width: "150px" }}>
          Buy NFT
        </button> */}
      </div>
    </div>
    </div>
  );
}

export default SingleNft;
