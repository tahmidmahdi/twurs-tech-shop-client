import React from 'react';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <HeaderMain></HeaderMain>
            <Services></Services>
        </div>
    );
};

export default Home;