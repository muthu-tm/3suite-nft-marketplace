import React, { useState, useEffect, useContext } from "react";
import "./explore.css";
import Heading from "../../container/Heading/Heading";
import NFT4 from "../../assets/images/n4.jpg";
import Image6 from "../../assets/images/s6.jpg";
import LoadingGif from "../../assets/images/loading.gif";
import { useLocation, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {
  getAllAssets,
  getAppConfig,
  getTopCreators,
  sortData,
} from "../../services/APIManager";
import NotFound from "../../assets/images/notFound.png";
import { web3GlobalContext } from "../../context/global-context";

function Explore(props) {
  const navigate = useNavigate();
  const { walletAddress } = useContext(web3GlobalContext);
  const location = useLocation();
  const { state } = location;
  console.log("state value" , state)

  const [openFilter, setOpenFilter] = useState(false);
  const [allAssets, setAllAssets] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState("");
  const [tagSel, setTagSel] = useState(false);
  const [filter, setFilter] = useState(null);
  const [topCreator, setTopCreator] = useState();

  const [exploreType, setExploreType] = useState(state?state : "nft");


  const getAssets = async () => {
    try {
      setIsLoading(true);
      let res = await getAllAssets();
      console.log("getAllAssets", res);

      if (res.status) {
        setIsLoading(false);
        setAllAssets(res.data);
      }
    } catch (e) {
      console.log("getAllAssets", e);
      return false;
    }
  };
  const getFilters = async () => {
    try {
      let filterRes = await getAppConfig();
      setTags(filterRes.data.tags);
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };
  const TopCreator = async () => {
    try {
      const creatorRes = await getTopCreators();
      console.log("creatorRes", creatorRes);
      setTopCreator(creatorRes.data);
    } catch (e) {
      console.log("error in getting top creator", e);
      return;
    }
  };
  useEffect(() => {
    TopCreator();
  }, [walletAddress]);

  useEffect(() => {
    getAssets();
  }, []);

  useEffect(() => {
    getFilters();
    setExploreType(state)
  }, [state]);
  
  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  const moveSingleNFTPage = async (id) => {
    navigate(`/nft/${id}`, { state: id });
  };

  const handleChangeTags = (event) => {
    console.log("event", event);
    const { target } = event;
    setTagSel(true);
    let newSelectedBoxes = [...selectedTags];
    if (target.checked) {
      newSelectedBoxes.push(target.id);
      console.log("push", newSelectedBoxes);
    } else {
      newSelectedBoxes = newSelectedBoxes.filter((id) => id !== target.id);
      console.log("pop", newSelectedBoxes);
    }
    setSelectedTags(newSelectedBoxes);
  };

  async function onClickSorting(e) {
    console.log("__________", e.target.value);
    setFilter(e.target.value);
  }

  const sortingNFTs = async () => {
    try {
      let sortRes = await sortData(
        selectedTags ? selectedTags : "",
        filter ? filter : "desc"
      );
      console.log("sortRes", sortRes);
      setAllAssets(sortRes.data);
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };

  useEffect(() => {
    if (selectedTags.length != 0 || filter) {
      sortingNFTs();
    }
  }, [selectedTags, filter]);
  return (
    <div className="explore">
      <div className="filter-section">
        <Heading title="Explore" />
        {exploreType === "nft" &&
        <div style={{ display: "flex", alignItems: "center" }}>
          <select className="filterBtn" onChange={onClickSorting}>
            <option selected value="desc">
              All
            </option>
            <option value="desc">Recently Created</option>
            <option value="asc"> Created Ago</option>
          </select>
          <div className="filterBtn" onClick={() => setOpenFilter(!openFilter)}>
            <div className="f-text">Select Filters</div>
            {!openFilter ? (
              <IconContext.Provider
                value={{
                  size: "1em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginTop: 5, marginLeft: 8 }}>
                  <MdKeyboardArrowDown />
                </div>
              </IconContext.Provider>
            ) : (
              <IconContext.Provider
                value={{
                  size: "1em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginTop: 5, marginLeft: 8 }}>
                  <MdKeyboardArrowUp />
                </div>
              </IconContext.Provider>
            )}
          </div>
          {openFilter && (
            <div className="f-dd">
              {tags?.map((item, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      paddingBottom: 5,
                    }}
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                      id={item.name}
                      onChange={(event) => handleChangeTags(event)}
                    />
                    <div className="f-text"> {item.name}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div> }
      </div>

      {isLoading ? (
        <div style={{ width: "100%" }}>
          <img
            src={LoadingGif}
            alt=""
            className="loading-gif"
            style={{ width: 200, margin: "auto", display: "flex" }}
          />
        </div>
      ) : (
        <>
          {exploreType === "nft" ? (
            <div className="exp-sec">
              {allAssets?.map((item, index) => {
                return (
                  <div
                    className="single-exp"
                    onClick={() => moveSingleNFTPage(item.id)}
                  >
                    <img
                      src={isValidUrl(item.asset) ? item.asset : NotFound}
                      alt=""
                      className="exp-img"
                    />
                    <div className="name">{item.name}</div>

                    <div className="desc-sec">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={Image6} alt="" className="user-img" />
                        <div>
                          <div className="owned">
                            {item.owner?.name ? "Owned By" : "Created By"}
                          </div>
                          <div className="creator-name">
                            {item.owner?.name || item.creator?.name}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="owned">Price</div>
                        <div className="creator-name">2.75ETH</div>
                      </div>
                    </div>
                    <div className="buyBtn">View More</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              {exploreType === "category" ? (
                <>
                  <div className="all-cat">
                    {tags?.map((item, index) => {
                      return (
                        <div
                          className="single-cat"
                         
                        >
                          <img src={item.img} alt="" className="cat-img" />
                          <div className="cat-name">{item.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  {exploreType === "creator" ? (
                    <>
                      <div className="creator-list">
                        {topCreator?.map((item, index) => {
                          return (
                            <div className="exp-c-card">
                              <img
                                src={
                                  item.profile.img ? item.profile.img : NotFound
                                }
                                alt=""
                                className="exp-creator-img"
                              />
                              <div className="exp-creater-right">
                                <div className="ec-name">{item.name}</div>
                                <div className="ec-eth">{item.user_id}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
      {/* <SingleNft/> */}
    </div>
  );
}

export default Explore;
