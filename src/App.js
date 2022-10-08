import { useState } from 'react'
import './App.scss';
import headerImg from './images/headerImg.jpg'
import recipesImg from './images/Recipes.png'
import Navbar from './components/Navbar';

function App() {

 

  
  return(

    <div className='wrapper'>
      <div className="hero-img"></div>
      <Navbar />
      <section className="hero">
        <h1>Ranko Koturić Web Developer</h1>
        <p className="subhead">My personal protfolio page</p>
        <svg className="down-arrow" viewBox="0 0 16 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z" fill="black"/>
        </svg>
      </section>
      <section className='more-info'>
        <div className='feature'>
          <div className='content'>
            <p className='title'>Recipes app</p>
            <p className='desc'>Application where you can search for recipes, save favourite ones and comment out other people saved recipes.
            Frontend made with React framework, fetching recipes from foreign api.
             Backend made with Nest framework jwt authentiaction implemented</p>
          </div>
          <img src={recipesImg} alt="projekt" />
        </div>
        <div className='feature left'>
          <div className='content'>
            <p className='title'>Projekt</p>
            <p className='desc'>Projekt opis</p>
          </div>
          <img src={headerImg} alt="projekt" />
        </div>
        <div className='feature'>
          <div className='content'>
            <p className='title'>Projekt</p>
            <p className='desc'>Projekt opis</p>
          </div>
          <img src={headerImg} alt="projekt" />
        </div>
      </section>
      <div >
        Bleee
      </div>
    </div>
  )

}

export default App;
