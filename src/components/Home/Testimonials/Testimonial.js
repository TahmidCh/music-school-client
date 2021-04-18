import React, { useEffect, useState } from 'react';
import SingleTestimonial from './SingleTestimonial';

const Testimonial = () => {
    const [testimonials, setTestimonials]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setTestimonials(data)
        })
    },[])
    
    
    return (
        <div className="container d-flex justify-content-evenly">
            {
                testimonials.map(testimonial => <SingleTestimonial testimonial={testimonial}></SingleTestimonial>)
            }
        </div>
    );
};

export default Testimonial;