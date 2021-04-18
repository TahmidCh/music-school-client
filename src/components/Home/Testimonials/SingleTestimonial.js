import React from 'react';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SingleTestimonial = ({ testimonial }) => {
    console.log(testimonial);
    return (
        <div>
            <div class="card" style={{ width: "18rem", height:"250px"}}>
                <div class="card-body">
                    
                    <h5 class="card-title">{testimonial.title}</h5>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                    <p class="card-text">{testimonial.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;