import React, { useState, useEffect, useContext } from "react";
import "./createNft.css";
import Heading from "../../container/Heading/Heading";
import { IconContext } from "react-icons";
import { RiImageAddFill } from "react-icons/ri";
import { createNFTAsset, getAppConfig, getS3UserUrl } from "../../services/APIManager";
import NotFound from "../../assets/images/notFound.png";
import { uuid } from "uuidv4";
import { web3GlobalContext } from "../../context/global-context";
import { useNavigate } from "react-router-dom";
import config from "../../config";
import { deployERC1155 } from "../../services/web3-nft-services";
import { getTokenContract, getTokenInfo } from "../../services/web3-token-services";

let asset_id = uuid();
function CreateNft(props) {
  const navigate = useNavigate();
  const [nftName, setNftName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUploading, setImageUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState();
  const [assetType, setAssetType] = useState("");
  const [tags, setTags] = useState([]);
  const [tagSelected, setTagSelected] = useState([]);
  const auth_token = localStorage.getItem("auth_token");
  const { walletAddress, chainGlobal } = useContext(web3GlobalContext);

  async function uploadPicture(e) {
    try {
      console.log({ picturePreview: URL.createObjectURL(e.target.files[0]) });
      setImageUploading(true);
      // const assetRes = await getS3UserUrl(
      //   auth_token,
      //   asset_id,
      //   e.target.files[0].name
      // );
      const formData = new FormData();
      // formData.append("acl", "public-read");
      // formData.append("Content-Type", e.target.files[0].type);
      // Object.entries(assetRes.data.fields).forEach(([field, value]) => {
      //   formData.append(field, value);
      // });
      formData.append("file", e.target.files[0]);
      formData.append("id", asset_id);

      const config = {
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${auth_token}`,
        },
        method: "POST",
        body: formData,
      };

      // let postImgRes = await fetch(`http://localhost:3001/v1/nft/upload-file`, config );
      // console.log("postImgRes", postImgRes);
      // setPreviewImage(`${postImgRes.data.image}`);
      setPreviewImage("https://3suite-nft-test.infura-ipfs.io/ipfs/QmTs6ZqPdADZBJjD4kvNdQAyABCPy2J8Xkr9NugVgLHb7i/cryptopunks-5822.png");
      setImageUploading(false);
    } catch (e) {
      console.log("error", e);
      return;
    }
  }
  useEffect(() => {
    if (previewImage) {
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
      console.log("previewImage", previewImage);
      const _assetType = isImageOrVideo(previewImage);
      setAssetType(_assetType);
      console.log("_assetType", _assetType);
    }
  }, [previewImage]);

  const loadInfo = async () => {
    try {
      let filterRes = await getAppConfig();
      setTags(filterRes.data.tags);
    } catch (error) {
      console.log("error", error);

      return false;
    }
  };

  const onSelectTag = async (value) => {
    if (tagSelected.includes(value)) {
      setTagSelected((prevState) =>
        prevState.filter((prevItem) => prevItem !== value)
      );
    } else {
      setTagSelected([...tagSelected, value]);
    }
  };

  useEffect(() => {
    if (walletAddress) {
      loadInfo();
    }
  }, [walletAddress]);

  const mint = async () => {
    try {
      let _toAdd = "0xD8226506f1d2159a9d041402801947DC5e9F7492";
      let _amount = 1000000000000;
      let tokenRes = await getTokenInfo("0xFA965E021b455deDF99f775445A1d1EBA695bf72");
      console.log("token Res: ", tokenRes);

      let tokContract = await getTokenContract("0xFA965E021b455deDF99f775445A1d1EBA695bf72")
      let mint = await tokContract.methods
      .mint(_toAdd, _amount.toString())
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

      console.log(mint)
    } catch (error) {
      console.log(error)
    }
  }

  const burn = async () => {
    try {
      let _toAdd = "0xD8226506f1d2159a9d041402801947DC5e9F7492";
      let _amount = 1000000000000;
      let tokenRes = await getTokenInfo("0xFA965E021b455deDF99f775445A1d1EBA695bf72");
      console.log("token Res: ", tokenRes);

      let tokContract = await getTokenContract("0xFA965E021b455deDF99f775445A1d1EBA695bf72")
      let burn = await tokContract.methods
      .burn(_amount.toString())
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

      console.log(burn)
    } catch (error) {
      console.log(error)
    }
  }

  const pause = async () => {
    try {
      let _toAdd = "0xD8226506f1d2159a9d041402801947DC5e9F7492";
      let _amount = 100000000000000000000;
      let tokenRes = await getTokenInfo("0xFA965E021b455deDF99f775445A1d1EBA695bf72");
      console.log("token Res: ", tokenRes);

      let tokContract = await getTokenContract("0xFA965E021b455deDF99f775445A1d1EBA695bf72")
      let pause = await tokContract.methods
      .pause()
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

      console.log(pause)
    } catch (error) {
      console.log(error)
    }
  }

  const unpause = async () => {
    try {
      let _toAdd = "0xD8226506f1d2159a9d041402801947DC5e9F7492";
      let _amount = 100000000000000000000;
      let tokenRes = await getTokenInfo("0xFA965E021b455deDF99f775445A1d1EBA695bf72");
      console.log("token Res: ", tokenRes);

      let tokContract = await getTokenContract("0xFA965E021b455deDF99f775445A1d1EBA695bf72")
      let unpause = await tokContract.methods
      .unpause()
      .send({ from: walletAddress })
      .then(function (receipt) {
        return receipt;
        // let TxHash = receipt.transactionHash;
      });

      console.log(unpause)
    } catch (error) {
      console.log(error)
    }
  }


  const onCreateNFT = async () => {
    try {
      const data = {
        id: asset_id,
        tags: tagSelected,
        name: nftName,
        token_id: 1,
        description: description,
        image: previewImage,
        properties: {
          linked: "link",
          name: "link",
        },
      };
      // let addRes = await createNFTAsset(auth_token, data);
      // if (addRes.status) {
      console.log("Successfully added an account!");
      let deployRes =
        await deployERC1155(
          nftName,
          "https://3suite-nft-test.infura-ipfs.io/ipfs/Qme7NgNd2Cin6mvYFcHtvtHphqYnMQa4ZfJ5pz2CrT9EXa/",
          [1],
          [1],
          [nftName + " - 01"]
        );

      console.log("deploy Res: ", deployRes);
      if (deployRes && deployRes.transactionHash) {
        console.log(
          "Successfully created an asset: ",
          deployRes.transactionHash
        );
        navigate("/portfolio");
      } else {
        console.log("Failed to create an asset!");
      }
      // } else {
      //     console.log("Failed to create an asset!");
      //   }
    } catch (error) {
      console.log("Error while creating NFT!");
      return false;
    }
  };

  return (
    <div className="create">
      <Heading title="Create New NFT" />
      <div style={{ marginTop: 25 }} />
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
          {!previewImage ? (
            <div className="image-file">
              <input
                type="file"
                className="FileUpload"
                accept=".jpg,.png,.gif"
                onChange={uploadPicture}
              />
              {imageUploading ? (
                <div
                  style={{
                    height: "100%",
                    cursor: "pointer",
                    width: "100%",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  Uploading...
                </div>
              ) : (
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
              )}{" "}
            </div>
          ) : (
            <div className="prev-cont">
              {assetType === "image" ? (
                <img src={previewImage} alt="" className="prev-img" />
              ) : assetType === "video" ? (
                <>
                  <video controls className="prev-img">
                    <source src={previewImage} type="video/mp4" />
                  </video>
                </>
              ) : (
                <img src={NotFound} alt="" className="prev-img" />
              )}
            </div>
          )}
          <div className="tags">
            {tags?.map((item, index) => {
              return (
                <div
                  className="single-tag"
                  onClick={() => {
                    onSelectTag(item.name);
                  }}
                  style={{
                    background: tagSelected.includes(item.name)
                      ? "#fff"
                      : "transparent",
                    color: tagSelected.includes(item.name) ? "#000" : "#fff",
                  }}
                >
                  {item.name}
                </div>
              );
            })}

          </div>
        </div>
        <div className="data-cont">
          <div className="textfield-head">Name *</div>
          <input
            placeholder="Nft Name"
            className="textfield-input"
            onClick={(e) => setNftName(e.target.value)}
          />
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
            onClick={(e) => setDescription(e.target.value)}
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

          {/* <div className="textfield-head">Royalties </div>
          <div className="textfield-desc">
            {" "}
            Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
          </div> */}
          {/* <input placeholder="10" className="textfield-input" /> */}
          <button className="cnt-wallet" style={{ width: "150px" }} onClick={mint}>
            Create NFT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateNft;
