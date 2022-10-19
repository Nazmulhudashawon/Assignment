import React from 'react';
import Banner from './Banner/Banner';
import Main from './Main/Main';
import Products from './ServiceProducts/Products';
import Provider from './ServiceProvider/Provider';
import Provide from './Services we provide/Provide';

const Home = () => {
  return (
    <div>
      <Banner />
      <Main />
      <Products />
      <Provider />
      <Provide />
    </div>
  );
};

export default Home;