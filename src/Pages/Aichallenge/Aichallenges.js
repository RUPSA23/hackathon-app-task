import React from 'react';
import css from './Aichallenge.css'
import Aichallenge from './Aichallenge'

const Aichallenges = () => {
  const Aichallenges = [
    {
      title: 'Prove your skills',
      description: 'Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.'
    },
    {
      title: 'Learn from community',
      description: 'One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.'
    },
    {
      title: 'Challenge yourself',
      description: 'There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.'
    },
    {
      title: 'Earn recognition',
      description: 'You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.'
    }
  ]
    return (
        <div className="aichallenge">
            <h1>Why Participate in <span>AI Challenges?</span></h1>
        <div className="fourCard">
        {
              Aichallenges.map(challenge => <Aichallenge
              challenge={challenge}
              ></Aichallenge>)
             }
        </div>
            
             
        </div>
    );
};

export default Aichallenges;