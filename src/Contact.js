import React from 'react';
import { useNavigate } from 'react-router-dom';



const Contact = () => {
        const nevigate = useNavigate();
        const goToHome = () => {
            nevigate ("/")
    }
  return (
    <>
    <section>
        <h1> contact us page</h1>
        <button onClick={goToHome }> go to home</button>
    </section>
    </>
  )
}

export default Contact