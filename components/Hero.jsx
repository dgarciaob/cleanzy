'use client'

import React, {useState} from 'react';


const Hero = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log (`Email: ${email}`);

    const res = await fetch ("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({email}),
    });

    const {msg} = await res.json();
    setError(msg);

    if (res.ok) {
      setSuccessMessage(msg); 
      setErrorMessage(''); 
    } else {
      setErrorMessage(msg); 
      setSuccessMessage(''); 
    }
  };

  return (
    <section className='static'>
      <div className='max-[639px]:text-center sm:max-[767px]:text-center relative'>

        <h1 className='max-[639px]:w-80 max-[639px]:items-center max-[639px]:mt-10 max-[639px]:text-3xl  
          sm:max-[767px]:text-center sm:max-[767px]:text-2xl sm:max-[767px]:w-96 sm:max-[767px]:mt-10
          md:max-[1023px]:absolute md:max-[1023px]:text-3xl md:max-[1023px]:max-w-[400px] md:max-[1023px]:top-24 md:max-[1023px]:left-10
          lg:max-[1279px]:absolute lg:max-[1279px]:text-5xl lg:max-[1279px]:max-w-[600px] lg:max-[1279px]:top-24 lg:max-[1279px]:left-10  
          xl:absolute xl:text-5xl xl:max-w-[600px] xl:top-24 xl:left-10
          mx-auto font-bold leading-snug'
        >Cleanzy te devuelve el tiempo para lo que realmente importa</h1>

        <img src="/images/imagenHero-removebg.png" alt='Hero Image' 
          className='w-full' 
        />

        <p className='max-[639px]:mt-0 max-[639px]:mb-5 
          sm:max-[767px]:text-center sm:max-[767px]:mt-0 sm:max-[767px]:mb-8
          md:max-[1023px]:absolute md:max-[1023px]:text-2l md:max-[1023px]:max-w-[300px] md:max-[1023px]:top-60 md:max-[1023px]:left-10
          lg:max-[1279px]:absolute lg:max-[1279px]:text-2xl lg:max-[1279px]:max-w-[500px] lg:max-[1279px]:top-72 lg:max-[1279px]:left-10 
          xl:absolute xl:text-3xl xl:max-w-[550px] xl:top-72 xl:left-10 
          mt-12 leading-[1.3]'
        >Limpieza sin esfuerzo con las mejores trabajadoras del hogar.<br></br>Cuando quieras, cómo quieras.</p>

        <h6 className='max-[639px]:w-72 max-[639px]:mb-8 
          sm:max-[767px]:text-center sm:max-[767px]:mt-0 sm:max-[767px]:mb-8
          md:max-[1023px]:relative md:max-[1023px]:left-10 md:max-[1023px]:mb-5 md:max-[1023px]:mt-0
          lg:max-[1279px]:relative lg:max-[1279px]:left-10 lg:max-[1279px]:mb-5 lg:max-[1279px]:mt-0
          xl:absolute xl:bottom-80 xl:max-w-[550px] xl:left-10 xl:mb-5 
          mx-auto'
        >Ya casi iniciamos, ingresa tu correo y ¡accede a descuentos por lanzamiento!</h6>


        <form onSubmit={handleSubmit}>
          <input 
            className='max-[639px]:mb-5
            sm:max-[767px]:mb-5 sm:max-[767px]:mx-auto sm:max-[767px]:mr-5
            md:max-[1023px]:absolute md:max-[1023px]:left-10 md:max-[1023px]:mb-5
            lg:max-[1279px]:absolute lg:max-[1279px]:left-10 lg:max-[1279px]:mb-5
            xl:left-10 xl:top-[590px] xl:absolute 
            shadow appearance-none border rounded w-[350px] py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            id='email'
            placeholder='Ingresa tu correo'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>

          <button className='xl:left-[400px] xl:top-[590px] xl:absolute 
            md:max-[1023px]:relative md:max-[1023px]:left-[400px] md:max-[1023px]:mb-5
            lg:max-[1279px]:relative lg:max-[1279px]:left-[400px] lg:max-[1279px]:mb-5
            primary-bg-color px-3.5 py-[0.55rem] text-white text-lg rounded-xl hover:opacity-80 active:opacity-70'
          >Suscríbete</button>
        </form>

        {successMessage && 
          <p className='max-[639px]:mb-0 text-[#D68FD6] 
            sm:max-[767px]:mb-0 sm:max-[767px]:mx-auto sm:max-[767px]:mr-5
            md:max-[1023px]:relative md:max-[1023px]:left-10 md:max-[1023px]:mb-0
            lg:max-[1279px]:relative lg:max-[1279px]:left-10 lg:max-[1279px]:mb-0
            xl:left-10 xl:top-[660px] xl:absolute'
          >{successMessage}</p>
        }

        {errorMessage && 
          <p className='max-[639px]:mb-0 text-red-500
            sm:max-[767px]:mb-0 sm:max-[767px]:mx-auto sm:max-[767px]:mr-5
            md:max-[1023px]:relative md:max-[1023px]:left-10 md:max-[1023px]:mb-0
            lg:max-[1279px]:relative lg:max-[1279px]:left-10 lg:max-[1279px]:mb-0
            xl:left-10 xl:top-[660px] xl:absolute'
          >{errorMessage}</p>
        }
        
      </div>
    </section>
  )
}

export default Hero