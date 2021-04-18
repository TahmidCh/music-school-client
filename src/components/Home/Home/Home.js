import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navigation/Navbar';
import Header from '../Header/Header';
import LessonsMain from '../Lessons/LessonsMain';
import LittleMagic from '../LittleMagic/LittleMagic'
import MusicForAll from '../MusicForAll/MusicForAll';
import Teachers from '../Teachers/Teachers';
import Testimonial from '../Testimonials/Testimonial';
import TestimonialsMain from '../Testimonials/TestimonialsMain';
import WhyUsMain from '../WhyUs/WhyUsMain';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <WhyUsMain></WhyUsMain>
            <LittleMagic></LittleMagic>
            <LessonsMain></LessonsMain>
            <MusicForAll></MusicForAll>
            <Teachers></Teachers>
            <TestimonialsMain></TestimonialsMain>
            <Footer></Footer>
        </div>
    );
};

export default Home;