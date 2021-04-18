import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/dhrupod logo.png'
import { useForm } from "react-hook-form";


const Review = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://still-beyond-51979.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Thanks for the review')
                }
            })
    }

    return (
        <div className="row">
            <div class="wrapper col-md-4">
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
            <div className="col-md-8 mt-5 pe-5">
                <h1>How was our service?</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Enter your title" class="form-control" {...register("title")} />
                    <br />
                    <input placeholder="Enter your description" class="form-control" {...register("description", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input className="btn btn-danger" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Review;