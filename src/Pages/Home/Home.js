import React from 'react';
import Aichallenge from '../Aichallenge/Aichallenges';
import Cards from '../Cardss/Cards';
import ExploreChallenges from '../ExploreChallenges/ExploreChallenges';
import Features from '../Features/Features';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Intro></Intro>
            <Features></Features>
            <Aichallenge></Aichallenge>
            <ExploreChallenges></ExploreChallenges>
            <Cards></Cards>
             
        </div>
    );
};

export default Home;