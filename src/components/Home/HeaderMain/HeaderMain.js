import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        
            <div style={{height: '40%'}} className="d-flex align-items-center justify-content-center">
                <div className="headerInnerDiv">
                    <h1 className="text-white">Bring music to life!</h1>
                    <h4 className="text-white">Start to play today</h4>
                    <Link to="/lessons">
                    <button type="button" class="btn btn-danger ">Book Online</button>
                    </Link>
                </div>
            </div>
        
    );
};

export default HeaderMain;