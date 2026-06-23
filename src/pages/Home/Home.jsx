import React, { useState } from 'react';
import './Home.css'

const Home = () => {
    const [category, setCategory] = useState("All")
    return (
        <div>
            <Header></Header>
            <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
            <FoodDisplay category={category}></FoodDisplay>
        </div>
    );
};
import './Home.css'
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

export default Home;