import React from 'react';
import { NavBar } from '../../components';
import { navBar } from './data.source';

function Home() {
  return <NavBar {...navBar} />;
}

export default Home;
