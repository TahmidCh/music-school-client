import React from 'react';
import { Link } from 'react-router-dom';
import './LittleMagic.css'

const littleMagic = () => {
    return (
        <div style={{height: '300px'}} className="d-flex align-items-center justify-content-center littleMagic mt-5">
            <div  className="littleMagic-Inner mt-5">
                <h1 className="text-white">Prepare youself for little magic</h1>
                <br/>
                <Link to="/lessons">
                <button type="button" class="btn btn-danger">Book Online</button>
                </Link>
            </div>
        </div>
    );
};

export default littleMagic;