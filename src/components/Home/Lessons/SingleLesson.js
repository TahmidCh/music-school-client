import React from 'react';
import { Link } from 'react-router-dom';
import './SingleLesson.css'

const SingleLesson = ({ lesson }) => {
    
    return (
        <div>
            <Link to='/checkout/payment'>
                <div className="singleLesson">
                    <img style={{ width: '70px' }} src={lesson.img} alt="" />
                    <h4>{lesson.name}</h4>
                </div>
            </Link>
        </div>

    );
};

export default SingleLesson;