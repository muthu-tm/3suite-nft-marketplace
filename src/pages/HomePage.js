import React from 'react';
import Banner from '../components/HomeScreen/Banner/Banner';
import TopCreator from '../components/HomeScreen/TopCreators/TopCreator';
import TopNft from '../components/HomeScreen/TopNFT/TopNft';

function HomePage(props) {
    return (
        <div>
            <Banner/>
            <TopCreator/>
            <TopNft/>
        </div>
    );
}

export default HomePage;