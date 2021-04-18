import React from 'react';
import Header from '../Home/Header/Header';
import LessonsMain from '../Home/Lessons/LessonsMain';
import Footer from '../Shared/Footer/Footer';
import logo from '../../images/dhrupod logo.png'
import './LessonPage.css'

const LessonsPage = () => {
    return (
        <div>
            <div class="wrapper">

                <nav id="sidebar">
                    <div class="sidebar-header">
                        <img style={{ width: "150px" }} src={logo} alt="" />
                    </div>

                    <ul class="list-unstyled components">
                        <li>
                            <a href="home">Home</a>
                        </li>

                        <li>
                            <a href="login">Login</a>
                        </li>
                        <li>
                            <a href="contact">Contact</a>
                        </li>
                    </ul>
                </nav>

            </div>
            <LessonsMain></LessonsMain>

        </div>
    );
};

export default LessonsPage;