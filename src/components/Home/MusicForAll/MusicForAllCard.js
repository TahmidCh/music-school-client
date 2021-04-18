import React from 'react';

const MusicForAllCard = ({ mfa }) => {
    
    return (
        <div>
            <div className="mt-5">
                <h4 className="text-center">{mfa.title}</h4>
                <p className="text-secondary text-center">{mfa.subtitle}</p>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img src={mfa.img} class="card-img-top" alt="..." />
                <div class="card-body">

                    <p class="card-text">{mfa.description}</p>

                </div>
            </div>
        </div>
    );
};

export default MusicForAllCard;