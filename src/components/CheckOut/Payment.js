import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/dhrupod logo.png'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCard';

const stripePromise = loadStripe('pk_test_51Iejq5Ee9yZCKwxr0xHRwydpSMUOcOHkSYOW1ExBmwNiknmuEvMKSChs07uSdmn1ZHOHZykaiojnruH2gtEkJQle00RKEiqezm');

const Payment = () => {
    return (
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
                            <a href="payment">Payment</a>
                        </li>
                        <li>
                            <a href="review">Review</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-md-4">
                <h1>Payment method</h1>
                <ol>
                    <li>Your have to pay $100 for admission</li>
                    <li>Pay your monthly payments in our school's booth</li>
                    <li>Pay your mothly fees before 7th of the month</li>
                    <li>We have 7 days refund policy</li>
                </ol>
                </div>
                <div className="col-md-4 payment pe-3">
                    <h1>Pay here</h1>
                    <Elements stripe={stripePromise}>
                        <SimpleCardForm></SimpleCardForm>
                    </Elements>
                </div>
            

        </div>
    );
};

export default Payment;