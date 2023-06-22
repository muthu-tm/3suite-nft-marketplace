import React from "react";
import "./topCreators.css";
import Heading from "../../../container/Heading/Heading";
import CreatorCard from "../../../container/Creator/CreatorCard";

function TopCreator(props) {
  return (
    <div className="top-creator">
      <Heading title="Top Creators" />
      <div className="creator-list">
        <CreatorCard />
      </div>
      <div className="view-btn">
        <button className="view-more">
          View More <span style={{marginLeft:5}}>  &rarr; </span>
        </button>
      </div>
    </div>
  );
}

export default TopCreator;
