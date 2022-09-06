import React from 'react'
import Footer from '../layouts/footer';


import Header from '../layouts/header';
import Banner from './home-components/banner';
import Campus from './home-components/campus';
import Career from './home-components/career';
import Counter from './home-components/counter';
import Events from './home-components/events';
import Search from './home-components/search';
import Sponsers from './home-components/sponsers';


export default function Home() {
    
    
    
  return (
    <>
         <Header />

         <Banner />
         
         <Counter />
         
         <Search />

         <Events />

         <Campus />

         <Career />
         
         <Sponsers />

         <Footer />
      
    </>
  )
}
