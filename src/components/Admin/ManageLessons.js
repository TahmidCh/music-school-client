import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/dhrupod logo.png'
import AddLesson from './AddLesson';

const ManageLessons = () => {
    return (
        <div>
            <div className="row mt-5">
                <div class="wrapper col-md-3">
                    <nav id="sidebar">
                        <div class="sidebar-header">
                            <Link to='/home'>
                                <img style={{ width: "150px" }} src={logo} alt="" />
                            </Link>
                        </div>
                        <ul class="list-unstyled components">
                            <li>
                                <a href="teacher">Add Teacher</a>
                            </li>
                            <li>
                                <a href="manage">Manage Lessons</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-9">
                    <AddLesson></AddLesson>
                </div>

            </div>

        </div>
    );
};

export default ManageLessons;