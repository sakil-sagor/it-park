import React from 'react';
import { NavLink } from 'react-router-dom';
import AreaTitle from '../AreaTitle/AreaTitle';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
// services area for home page 
const ServicesHome = () => {
    // call custom hook 
    const [services] = useServices();
    return (
        <div className="bg-gray-200 py-24">
            <div className="container m-auto ">
                <AreaTitle title="Our Courses" description="The Best In Our School"></AreaTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {

                        services.map(service => <Service key={service.id} service={service} ></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ServicesHome;