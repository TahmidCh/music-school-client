import React from 'react';
import mfa1 from '../../../images/mfa1.png'
import mfa2 from '../../../images/mfa2.png'
import mfa3 from '../../../images/mfa3.png'
import MusicForAllCard from './MusicForAllCard';

const musicForAll = [
    {
        title:'MUSIC FOR ALL AGES',
        subtitle: 'Music for everyone',
        img: mfa1,
        description: 'Anyone who has had the opportunity and the pleasure of learning a musical instrument will tell you how fun it is and how music can transcend'
    },
    {
        title:'PRE-PROFESSIONAL MUSIC',
        subtitle: 'Music for everyone',
        img: mfa2,
        description: 'Anyone who has had the opportunity and the pleasure of learning a musical instrument will tell you how fun it is and how music can transcend'
    },{
        title:'SUMMER CAMPS',
        subtitle: 'Music for everyone',
        img: mfa3,
        description: 'Anyone who has had the opportunity and the pleasure of learning a musical instrument will tell you how fun it is and how music can transcend'
    }
]

const MusicForAll = () => {
    return (
        <div className="container d-flex justify-content-evenly mt-5">
            {
                musicForAll.map(mfa => <MusicForAllCard mfa={mfa}></MusicForAllCard>)
            }
        </div>
    );
};

export default MusicForAll;