import React from 'react';
import guitar from '../../../icons/guitar.png'
import drums from '../../../icons/drums.png'
import flute from '../../../icons/flute.png'
import bass from '../../../icons/bass-guitar.png'
import vocalist from '../../../icons/vocalist.png'
import SingleLesson from './SingleLesson';

const lessons=[
    {
        name: 'Guitar',
        img: guitar
    },
    {
        name: 'Flute',
        img: flute
    },
    {
        name: 'Bass',
        img: bass
    },
    {
        name: 'Vocalist',
        img: vocalist
    },
    {
        name: 'Drums',
        img: drums
    },
]

const LessonsAll = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center mt-5 mb-5 justify-content-evenly">
            {
                lessons.map(lesson => <SingleLesson lesson={lesson}></SingleLesson>)
            }
        </div>
    );
};

export default LessonsAll;