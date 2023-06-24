import React from "react";
import "./createNft.css";
import Heading from "../../container/Heading/Heading";
import { IconContext } from "react-icons";
import { RiImageAddFill } from "react-icons/ri";

function CreateNft(props) {
  return (
    <div className="create">
      <Heading title="Create New NFT" />
      <div className="owned" style={{ marginBottom: 15 }}>
        <span style={{ color: "#CE00E6" }}>*</span> Required fields
      </div>
      <div className="c-sec">
        <div className="image-cont">
          <div className="textfield-head">
            Image, Video, Audio, or 3D Model *
          </div>
          <div className="textfield-desc ">
            {" "}
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </div>
          <div className="image-file">
            <input type="file" className="FileUpload" accept=".jpg,.png,.gif" />
            <IconContext.Provider
              value={{
                size: "3em",
                color: "#cbccd19c",
                className: "global-class-name",
              }}
            >
              <div
                style={{
                  height: "100%",
                  cursor: "pointer",
                  width: "100%",
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <RiImageAddFill />
              </div>
            </IconContext.Provider>
          </div>

          <div className="tags">
            <div className="single-tag">
                Animation
            </div>
            <div className="single-tag">
               3D NFT
            </div>
            <div className="single-tag">
                Nature
            </div>
            <div className="single-tag">
                Photography
            </div>
            <div className="single-tag">
               Space
            </div>
            <div className="single-tag">
                Anime
            </div>
          </div>
        </div>
        <div className="data-cont">
          <div className="textfield-head">Name *</div>
          <input placeholder="Nft Name" className="textfield-input" />
          <div className="textfield-head">Description </div>
          <div className="textfield-desc">
            {" "}
            The description will be included on the item's detail page
            underneath its image.{" "}
          </div>
          <textarea
            className="textfield-input"
            rows="5"
            cols="50"
            placeholder="Provide a detail description of your NFT"
          ></textarea>

          <div className="textfield-head">External Link </div>
          <div className="textfield-desc">
            {" "}
            3SuiteNFT will include a link to this URL on this item's detail
            page, so that users can click to learn more about it. You are
            welcome to link to your own webpage with more details.
          </div>
          <input
            placeholder="https://3suitenft.com/item/123"
            className="textfield-input"
          />

          <div className="textfield-head">Royalties </div>
          <div className="textfield-desc">
            {" "}
            Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
          </div>
          <input placeholder="10" className="textfield-input" />
          <button className="cnt-wallet" style={{width:'150px'}}>
           Create NFT
            </button>
        </div>

     
      </div>

    </div>
  );
}

export default CreateNft;
