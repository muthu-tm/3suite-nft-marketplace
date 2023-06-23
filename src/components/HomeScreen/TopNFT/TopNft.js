import React from 'react';
import "./topNft.css"
import Heading from '../../../container/Heading/Heading';
import NftCard from '../../../container/NFTCard/NftCard';

function TopNft(props) {
    return (
        <div className='t-nft'>
            <Heading title="Top NFTs" />
            <div className='nft-colln'>
              <NftCard/>
            </div>
            <div className="view-btn">
        <button className="view-more">
          View More <span style={{marginLeft:5}}>  &rarr; </span>
        </button>
      </div>
        </div>
    );
}

export default TopNft;