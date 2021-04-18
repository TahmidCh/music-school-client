import React from 'react';
import logo from '../../../images/dhrupod logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="home"><img className="ms-5 mt-2 logo" src={logo} alt=""/></a>
                
                <div class="collapse me-5 pe-3 d-flex justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="lessons">Lessons</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="admin/teacher">Admin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
</nav>
    );
};

export default Navbar;