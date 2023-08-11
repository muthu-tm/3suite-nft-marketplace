import React, { useState } from "react";
import "./profile.css";
import CoverImage from "../../assets/images/profilebg.jpg";
import ProfileImage from "../../assets/images/n8.jpg";
import { getEllipsisTxt } from "../../utils/formatter";
import NFT2 from "../../assets/images/n2.jpg";
import NFT3 from "../../assets/images/n3.jpg";
import NFT5 from "../../assets/images/n5.jpg";
import NFT6 from "../../assets/images/n6.jpg";
import NFT9 from "../../assets/images/n9.jpg";
import NFT10 from "../../assets/images/n10.jpg";
import NFT11 from "../../assets/images/n11.jpg";
import NFT12 from "../../assets/images/n12.jpg";
import Image1 from "../../assets/images/s1.jpg";
import Image2 from "../../assets/images/s2.jpg";
import Image3 from "../../assets/images/s3.jpg";
import Image4 from "../../assets/images/s4.jpg";
import Image5 from "../../assets/images/s5.jpg";
import Image6 from "../../assets/images/s6.jpg";
import Image7 from "../../assets/images/s7.jpg";
import OwnedNftCard from "../../container/NFTCard/OwnedNftCard";
import CreatedNFTCard from "../../container/NFTCard/CreatedNFTCard";
import OnSaleCard from "../../container/NFTCard/OnSaleCard";
import { IconContext } from "react-icons";
import {BsInstagram,BsBehance} from "react-icons/bs";
import {TbBrandAdobe} from "react-icons/tb";

function Profile(props) {
  const [acTab, setAcTab] = useState("1");
  return (
    <div className="profile-sec">
      <div style={{ position: "relative" }}>
        <img src={CoverImage} alt="" className="profile-bg" />
        <img src={ProfileImage} alt="" className="user-profile" />
      </div>
      <div className="user-desc">
        <div style={{display:'flex',alignItems:'center'}}>
        <div className="user-name">Username01379</div>
        <div style={{marginLeft:20}} />
        <IconContext.Provider
                value={{
                  size: "1.2em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginLeft: 10 }}>
                  <BsInstagram />
                </div>
                </IconContext.Provider>
                <IconContext.Provider
                value={{
                  size: "1.2em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginLeft: 10 }}>
               
                  <TbBrandAdobe />
                </div>
                </IconContext.Provider>
                <IconContext.Provider
                value={{
                  size: "1.2em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginLeft: 10 }}>
                <BsBehance />
                </div>
                </IconContext.Provider>
        </div>
        <div className="user-wallet">
          Address:{" "}
          <span style={{ color: "#CE00E6", fontSize: 12 }}>
            {getEllipsisTxt("0x72bCE2654500B89FC7876b1973636Ab116Da7C8A", 9)}
          </span>
        </div>
      </div>

      <div className="tab-sec">
        <div className="tab-head">
          <div
            className={acTab === "1" ? "head-text-active" : "head-text"}
            onClick={() => setAcTab("1")}
          >
            Created
          </div>
          <div
            className={acTab === "2" ? "head-text-active" : "head-text"}
            onClick={() => setAcTab("2")}
          >
            Owned
          </div>
          <div
            className={acTab === "3" ? "head-text-active" : "head-text"}
            onClick={() => setAcTab("3")}
          >
            On Sale
          </div>
          <div
            className={acTab === "4" ? "head-text-active" : "head-text"}
            onClick={() => setAcTab("4")}
          >
            Activity
          </div>
        </div>

        {/* <div className="b-bottom" style={{marginTop:20}}/> */}

        {acTab === "1" && (
          <div className="owned-sec">
            <CreatedNFTCard Image={NFT6} />
            <CreatedNFTCard Image={NFT12} />
            <CreatedNFTCard Image={NFT9} />
            <CreatedNFTCard Image={NFT11} />
          </div>
        )}
        {acTab === "2" && (
          <div className="owned-sec">
            <OwnedNftCard Image={NFT2} />
            <OwnedNftCard Image={NFT5} />
            <OwnedNftCard Image={NFT11} />
            <OwnedNftCard Image={NFT9} />
          </div>
        )}
        {acTab === "3" && (
          <div className="owned-sec">
            <OnSaleCard Image={NFT3} />
          </div>
        )}

        {acTab === "4" && (
          <div style={{width:'80%'}}>
            <div className="single-activity">
              <img src={Image1} alt="" className="act-img" />
              <div className="act-data">
                <div className="type">Bought NFT</div>
                <div className="act-wallet">
                  Purchased from{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    {getEllipsisTxt(
                      "0x72bCE2654500B89FC7876b1973636Ab116Da7C8A",
                      9
                    )}
                  </span>{" "}
                  for{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    1.35ETH
                  </span>
                </div>
              </div>
            </div>
            <div className="single-activity">
              <img src={Image3} alt="" className="act-img" />
              <div className="act-data">
                <div className="type">Sold NFT</div>
                <div className="act-wallet">
                  Purchased by{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    {getEllipsisTxt(
                      "0xC4f4Bc698c3090A5aBC23dfCBc50227C25895E9a",
                      9
                    )}
                  </span>{" "}
                  for{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    0.754ETH
                  </span>
                </div>
              </div>
            </div>
            <div className="single-activity">
              <img src={Image5} alt="" className="act-img" />
              <div className="act-data">
                <div className="type">Listed NFT</div>
                <div className="act-wallet">
                  Listed by{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    {getEllipsisTxt(
                      "0xC4f4Bc698c3090A5aBC23dfCBc50227C25895E9a",
                      9
                    )}
                  </span>{" "}
                  for{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    2.121ETH
                  </span>
                </div>
              </div>
            </div>
            <div className="single-activity">
              <img src={Image2} alt="" className="act-img" />
              <div className="act-data">
                <div className="type">Bought NFT</div>
                <div className="act-wallet">
                  Purchased from{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    {getEllipsisTxt(
                      "0x72bCE2654500B89FC7876b1973636Ab116Da7C8A",
                      9
                    )}
                  </span>{" "}
                  for{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    1.35ETH
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
