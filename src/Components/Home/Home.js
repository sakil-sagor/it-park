import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import ServicesHome from '../ServicesHome/ServicesHome';
import Slider from '../Slider/Slider';
import TeachersHome from '../TeachersHome/TeachersHome';

const Home = () => {
    return (
        <div>
            <div className=" ">
                {/* hero area  */}
                <Slider></Slider>
                {/* service area from services  */}
                <ServicesHome></ServicesHome>
                {/* Teacher area from teachers  */}
                <TeachersHome></TeachersHome>
                <AboutUs></AboutUs>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;