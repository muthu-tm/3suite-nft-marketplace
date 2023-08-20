import React, { useContext, useEffect, useState } from "react";
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
import { web3GlobalContext } from "../../context/global-context";
import Web3 from "web3";
import { getAssetByID, getRelevantAssets } from "../../services/APIManager";
import { useLocation } from "react-router-dom";
import LoadingGif from "../../assets/images/loading.gif";
import NotFound from "../../assets/images/notFound.png"

function SingleNft(props) {
  const { state } = useLocation();
  const [asset, setAsset] = useState();
  const [moreAssets, setMoreAssets] = useState([]);
  const [ownerAddress, setOwnerAddress] = useState();
  const [assetSource, setAssetSource] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [assetType, setAssetType] = useState("");

  const { walletAddress, chainGlobal } = useContext(web3GlobalContext);

  useEffect(() => {
    if (assetSource) {
      function isImageOrVideo(url) {
        const imageExtensions = ["jpg", "jpeg", "png", "gif"];
        const videoExtensions = ["mp4", "webm", "ogg"]; // Adjust the list as needed

        const extension = url.split(".").pop().toLowerCase();

        if (imageExtensions.includes(extension)) {
          return "image";
        } else if (videoExtensions.includes(extension)) {
          return "video";
        } else {
          return "unknown";
        }
      }
      console.log("assetSource", assetSource);
      const _assetType = isImageOrVideo(assetSource);
      setAssetType(_assetType);
      console.log("_assetType", _assetType);
    }
  }, [assetSource]);

  const getAsset = async () => {
    try {
      setIsLoading(true);
      let res = await getAssetByID(state);
      if (res.status) {
        setAsset(res.data);
        setOwnerAddress(res.data.creator.address);
        setAssetSource(res.data.asset);
        setIsLoading(false);
      }

      let relAssetsRes = await getRelevantAssets(
        res.data.tags.length > 0 ? res.data.tags : "",
        state,
        "desc"
      );
      setMoreAssets(relAssetsRes.data);
    } catch (e) {
      console.log("get Asset By ID: ", e);
      return false;
    }
  };

  

  return (
    <>

        <div className="nftSec">
          <Heading title="Item Detail" />
          <div className="single-nft">
            <div className="sec-l">
            <img src={NotFound} alt="" className="sgl-nft" />
            </div>
            <div className="sec-r">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="nft-name">Asset Name</div>
                <IconContext.Provider
                  value={{
                    size: "1.3em",
                    color: "#fff",
                    className: "global-class-name",
                  }}
                >
                  <div
                    style={{ marginLeft: 15, marginTop: 10, cursor: "pointer" }}
                  >
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
                      {getEllipsisTxt("0xC4f4Bc698c3090A5aBC23dfCBc50227C25895E9a", 9)}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex" }} className="m5">
                  <img src={Image4} alt="" className="own-img" />
                  <div>
                    <div className="Name">Current Owner</div>
                    <div className="Wallet">
                      {getEllipsisTxt("0x72bCE2654500B89FC7876b1973636Ab116Da7C8A", 9)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="nft-desc">
             Random description about the NFT.
              </div>
              <div className="nft-tags" style={{ marginTop: 5 }}>
                <div className="rate-btn">1.456ETH</div>
                <div className="nft-single-tag">$3,456</div>
              </div>
              <div className="l-bid">Latest bid</div>
              <div className="s-bid">
                <div className="user-sec">
                  <img src={Image2} alt="" className="bid-img" />
                  <div style={{ marginLeft: 20 }}>
                    <div className="bid-by">by Adem Smith</div>
                    <div className="bid-price">
                      {" "}
                      Placed a bid:{" "}
                      <span style={{ color: "#ae9023", fontWeight: 600 }}>
                        1.46ETH
                      </span>
                    </div>
                  </div>
                </div>
                <div className="s-date">Jun 15 2023</div>
              </div>
              <div className="s-bid">
                <div className="user-sec">
                  <img src={NFT12} alt="" className="bid-img" />
                  <div style={{ marginLeft: 20 }}>
                    <div className="bid-by">by John Wick</div>
                    <div className="bid-price">
                      {" "}
                      Placed a bid:{" "}
                      <span style={{ color: "#ae9023", fontWeight: 600 }}>
                        1.02ETH
                      </span>
                    </div>
                  </div>
                </div>
                <div className="s-date">May 27 2023</div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="rate-btn">Place Bid</div>
                {/* E7009C  */}
                <div className="rate-btn-pink">Purchase Now</div>
              </div>
              {/* <button className="cnt-wallet" style={{ width: "150px" }}>
            Buy NFT
          </button> */}
            </div>
          </div>

          {/* More Like This Section */}
          <div className="more-like">
            <div className="more-head">More Like This:</div>
            <div className="more-data">
              {moreAssets?.map((item, index) => {
                return (
                  <div className="nft-card">
                    <img src={Image} alt="" className="nft-img" />
                    <div className="desc-sec">
                      <div className="name">{item.name}</div>

                      <div className="owned">0.765ETH</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

    </>
  );
}

export default SingleNft;
