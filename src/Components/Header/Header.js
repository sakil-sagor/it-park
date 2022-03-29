
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import pro1 from '../../images/pro1.png'
import './Header.css'

const Header = () => {
    const { user, handelLogout } = useAuth();

    const [setProfileState] = useState('Off');


    // const profileToggle = (index) => {
    //     setProfileState(index);
    // }
    const toggleText = () => {
        setProfileState((state) => (state === "On" ? "Off" : "On"));
    };

    return (
        // header nav bar area 
        <div className="bg-pink-700	 ">
            <div className="container flex items-center	 justify-between m-auto p-4 text-white	">
                {/* logo area  */}
                <div className=" text-5xl	">
                    <NavLink className="font-extrabold	" to="/home"> TTC-IT.</NavLink >
                </div>
                {/* menu area  */}
                <div className=" flex items-center	justify-end	">

                    <div>
                        {
                            user.email ?
                                <div className='flex items-center'>
                                    <div>
                                        <span className='mr-4 font-bold'>{user.displayName}</span>

                                    </div>
                                    <div>
                                        <img style={{ cursor: 'pointer' }} onClick={toggleText} className="w-12" src={pro1} alt="" />
                                    </div>
                                    <div>
                                        <button className=" ml-4 text-white hover:text-gray-400 font-bold" onClick={handelLogout}>Log Out</button>
                                    </div>
                                </div>
                                :
                                < NavLink className="manu-item p-2 text-lg font-bold bg-red-800 rounded-md" to="/login"> LogIn </NavLink >

                        }




                    </div>

                </div>





            </div>
        </div >

    );
};

export default Header;