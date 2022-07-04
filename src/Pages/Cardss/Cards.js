import React from 'react';
// import travel from '../../assets/cardimage/Group 1000002466.png';
import butterfly from '../..';
import weather from '../..';
import data from '../..';
// import airline from '../../assets/cardimage/Group 1000002772.png';
import engineer from '../..';
import SingleCard from './SingleCard';
import css from './Cards.css';


const Cards = () => {
    const cards = [
        { 
            title: 'Travel Insurance Claim Prediction',
            timeState: 'Ended on',
            time: '16th May2022 09:00 PM',
            status: 'Past',
            image: "/assets/cardimage/Group 1000002466.png",
        },
        { 
            title: 'Engineering Graduates Employment Outcomes',
            timeState: 'Ended on',
            time: '16th May2022 09:00 PM',
            status: 'Past',
            image: '/assets/cardimage/Group 1000002773.png',
        },
        { 
            title: 'Data Sprint 70 - Airline passenger Satisfaction',
            timeState: 'Ends in',
            time: '00 : 11 : 27',
            status: 'Active',
            image: '/assets/cardimage/Group 1000002772.png',
        },
        { 
            title: 'Data Science Bootcamp-Graded Datathon',
            timeState: 'Starts in',
            time: '00 : 15 : 22',
            status: 'Upcoming',
            image: '/assets/cardimage/Group 1000002771.png',
        },
        { 
            title: 'Data Sprint 72 - Butterfly Identification',
            timeState: 'Starts in',
            time: '00 : 12 : 34',
            status: 'Upcoming',
            image: '/assets/cardimage/Group 1000002766.png',
        },
        { 
            title: 'Data Sprint 71 - Weather Recognition',
            timeState: 'Ends in',
            time: '01 : 17 : 10',
            status: 'Active',
            image: '/assets/cardimage/Group 1000002767.png',
        }
    ];
    return (
        <div className="cards">
            {
                cards.map(card => <SingleCard
                card={card}
                ></SingleCard>)
            }
        </div>
    );
};

export default Cards;