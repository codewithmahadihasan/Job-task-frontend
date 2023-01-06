import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navber } from './Componts/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'></Outlet>
        </div>
    );
};

export default Main;