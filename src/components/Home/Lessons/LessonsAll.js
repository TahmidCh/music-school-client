import React, { useEffect, useState } from 'react';
import SingleLesson from './SingleLesson';


const LessonsAll = () => {
    const [lessons, setLessons] = useState([]);
    useEffect(() => {
        fetch('https://still-beyond-51979.herokuapp.com/lessons')
            .then(res => res.json())
            .then(data => setLessons(data))
    }, [])
    return (
        <div className="container d-flex justify-content-center align-items-center mt-5 mb-5 justify-content-evenly">
            {
                lessons.map(lesson => <SingleLesson lesson={lesson}></SingleLesson>)
            }
        </div>
    );
};

export default LessonsAll;