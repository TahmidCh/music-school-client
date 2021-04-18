import React from 'react';
import whyus1 from '../../../images/whyus1.png'
import whyus2 from '../../../images/whyus2.png'
import whyus3 from '../../../images/whyus3.png'

const WhyUsCard = () => {
    return (
        <div className="d-flex mt-5 justify-content-evenly container"> 
            <div class="card container " style={{ width: '18rem' }}>
                <img src={whyus1} class="card-img-top" alt="..." />
                <div class="card-body ">
                    <h5 class="card-title ">Best Teachers</h5>
                    <p class="card-text">Our goal is to make the performing arts approachable and affordable to students of every skill level and every age,help you to explore your creativity.</p>
                </div>
            </div>

            <div class="card container " style={{ width: '18rem' }}>
                <img src={whyus2} class="card-img-top" alt="..." />
                <div class="card-body ">
                    <h5 class="card-title ">Award-Winning Process</h5>
                    <p class="card-text">Our goal is to make the performing arts approachable and affordable to students of every skill level and every age,help you to explore your creativity.</p>
                </div>
            </div>

            <div class="card container " style={{ width: '18rem' }}>
                <img src={whyus3} class="card-img-top" alt="..." />
                <div class="card-body ">
                    <h5 class="card-title ">Great Community</h5>
                    <p class="card-text">Our goal is to make the performing arts approachable and affordable to students of every skill level and every age,help you to explore your creativity.</p>
                </div>
            </div>
        </div>

    );
};

export default WhyUsCard;