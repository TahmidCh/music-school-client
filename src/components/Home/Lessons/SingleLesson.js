import React from 'react';
import { Link } from 'react-router-dom';
import './SingleLesson.css';



const SingleLesson = ({ lesson }) => {

    return (
        <div>
            <Link to='/checkout/payment'>
                <button class="transition me-5">
                    <img style={{width: '70px'}} src={lesson.img} alt=""/>
                </button>
                <h5 className="ms-4">{lesson.name}</h5>
            </Link>
        </div>

    );
};

export default SingleLesson;