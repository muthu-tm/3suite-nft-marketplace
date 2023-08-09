import React from 'react';
import "./explore.css"
import NftCard from '../../container/NFTCard/NftCard';
import SingleNft from '../SingleNftScreen/SingleNft';

function Explore(props) {
    return (
        <div className='exp-sec'>
{/* <NftCard/>
<NftCard/> */}

<SingleNft/>

        </div>
    );
}

export default Explore;