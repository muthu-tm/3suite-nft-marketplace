import React from "react";
import "./singleNft.css";
import NFT7 from "../../assets/images/n6.jpg";
import Image3 from "../../assets/images/s1.jpg";
import Image4 from "../../assets/images/s7.jpg";
import { getEllipsisTxt } from "../../utils/formatter";
import { MdShare } from "react-icons/md";
import { IconContext } from "react-icons";

function SingleNft(props) {
  return (
    <div className="single-nft">
      <div className="sec-l">
        <img src={NFT7} alt="" className="sgl-nft" />
      </div>
      <div className="sec-r">
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="nft-name">NFT Name / Anything</div>
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
        <div className="nft-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius
        </div>
        <div className="nft-tags">
          <div className="nft-single-tag">Animation</div>
          <div className="nft-single-tag">3D NFT</div>
          <div className="nft-single-tag">Nature</div>
        </div>
        <div className="s-nft-price">
          Current Price: <span className="s-nft-eth">0.02375ETH</span>
        </div>
        <button className="cnt-wallet" style={{ width: "150px" }}>
          Buy NFT
        </button>
      </div>
    </div>
  );
}

export default SingleNft;
