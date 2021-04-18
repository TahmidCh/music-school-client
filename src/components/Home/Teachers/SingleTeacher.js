import React from 'react';

const SingleTeacher = ({ teacher }) => {
    console.log(teacher);
    return (
        <div>
            <div class="card mb-3" style={{width: "290px", height: '160px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img style={{width: "100px"}} src={teacher.img} alt="..."/>
                    </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{teacher.name}</h5>
                                <p class="card-text">{teacher.designation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SingleTeacher;