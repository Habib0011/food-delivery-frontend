import React, { useState } from 'react';
import './Home.css'

const Home = () => {
    const [category, setCategory] = useState("All")
    return (
        <div>
            <Header></Header>
            <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
        </div>
    );
};
import './Home.css'
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';

export default Home;