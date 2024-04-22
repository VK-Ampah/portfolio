import { BrowserRouter } from "react-router-dom";
import { useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { About, Contact, Experience, 
  // Feedbacks, 
  Hero, Navbar, Tech, Works, StarsCanvas, Certifications, Footer } from "./components";

// toast.configure();


const App = () => {
  //   useEffect(() => {
  //   alert('This page has been repurposed');
  // }, []);

    useEffect(() => {
    toast.info('This page has been repurposed');
  }, []);
  return (
    <BrowserRouter>
     <ToastContainer />
      <div className='relative z-0 bg-primary '>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          {/* <StarsCanvas /> */}

        </div>
        <About />
        <Certifications />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;