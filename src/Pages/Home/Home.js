import React from 'react';
import Aichallenge from '../Aichallenge/Aichallenges';
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
        </div>
    );
};

export default Home;