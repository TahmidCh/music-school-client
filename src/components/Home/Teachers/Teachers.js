import React, { useEffect, useState } from 'react';
import SingleTeacher from './SingleTeacher';

const Teachers = () => {
    const [teacher, setTeacher] = useState([])
    useEffect(() => {
        fetch('https://still-beyond-51979.herokuapp.com/teachers')
            .then(res => res.json())
            .then(data => setTeacher(data))
    }, [])
    return (
        <div>
            <h1 className="text-center mt-5">Instructors</h1>
            <div className="container mt-5 d-flex justify-content-evenly">
                {
                    teacher.map(teacher => <SingleTeacher teacher={teacher}></SingleTeacher>)
                }

            </div>
        </div>

    );
};

export default Teachers;