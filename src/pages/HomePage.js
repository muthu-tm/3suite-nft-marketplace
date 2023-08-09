import React from 'react';
import Banner from '../components/HomeScreen/Banner/Banner';
import TopCreator from '../components/HomeScreen/TopCreators/TopCreator';
import TopNft from '../components/HomeScreen/TopNFT/TopNft';
import CreateAndSell from '../components/HomeScreen/CreateSell/CreateAndSell';
import Category from '../components/Categories/Category';

function HomePage(props) {
    return (
        <div>
            <Banner/>
            <TopCreator/>
            <Category/>
            <TopNft/>
            {/* <CreateAndSell/> */}
        </div>
    );
}

export default HomePage;