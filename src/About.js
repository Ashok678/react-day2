import React from 'react';
import { useNavigate } from 'react-router-dom';



const About = () => {
    const nevigate =useNavigate();
    const goToContact = () =>{
        nevigate("/");

    }
  return (
    <>
  <section>
    <h1>about us page</h1>
    <button onClick={() => goToContact()}>go  to contact page</button>

  </section>
  </>
  )
}

export default About