import { useEffect, useRef, useState } from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import Features from './components/features';
import Award from './components/award';
import Games from './components/games';
import About from './components/about';
import Expierence from './components/expierence';
import WorkWithUs from './components/workWithUs';
import Subscribe from './components/subscribe';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className=" bg-gray-900 scroll-smooth snap-y">
        <div className=" animate-slide relative bg-[url(assets/bg.png)] bg-fixed bg-cover bg-left md:bg-center min-h-screen w-full m-0">
          <Navbar />
          <Home />
          <Features />
          <Award />
        </div>
        <div className="animate-slide bg-[url(./assets/bg1.png)] bg-cover h-full">
          <div className="max-w-[1440px] w-full mx-auto p-5">
            <Games />
            <About />
          </div>
          <div className=" -mt-48 h-96 w-full bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>
        <div className=" relative max-w-[1440px] w-full mx-auto p-5">
          <Expierence />
          <div className=" absolute md:static inset-0 w-full h-screen flex items-start justify-start">
            <div className=" h-[300px] w-1/2 -ml-[30%] gradient-01"></div>
          </div>
        </div>
        <div className=" relative max-w-[1440px] w-full mx-auto p-5">
          <WorkWithUs />
          <Subscribe />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
