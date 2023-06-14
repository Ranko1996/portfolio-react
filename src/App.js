import './App.scss';
import headerImg from './images/headerImg.jpg';
import recipesImg from './images/Recipes.png';
import QR_code from './images/QR_code.png';
import flutterImg from './images/flutterApp.PNG';
import netCoreApiImg from './images/netCore.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

import { useInView } from 'react-intersection-observer';
import Accordion from './components/Accordion';

function App() {

  // const { ref, inView } = useInView({
  //   threshold: 0.15,
  // })

  const projects = [
    {
      title: "Landing page for local brewers",
      description: "The page you access by scanning the QR code is specifically dedicated to a local brewery called 'Ventil.'Ventil is a craft brewery that focuses on creating high-quality, artisanal beers with unique flavors and brewing techniques. Cheers",
      image: QR_code,
      flipped: false
    },
    {
      title: "Flutter mobile app",
      description: " A Flutter App with which you can track your daily expenditures.It shows a Real-Time Weekly Bar Graph of the tracked Expenditures. You can also delete an added expenditure.",
      image: flutterImg,
      flipped: true
    }
  ]

  return (

    <div className='wrapper' id="home_section">
      <div className="hero-img"></div>
      <Navbar />
      <section className="hero">
        <h1>Ranko Koturić Web Developer</h1>
        <p className="subhead">My personal portfolio page</p>
        <svg className="down-arrow" viewBox="0 0 16 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z" fill="black" />
        </svg>
      </section>
      <div style={{  marginTop: '6rem'}}>
        <div className="underline" />
        <h2 className="subtitle">Technologies I'm Familiar With</h2>
      </div>
      <Accordion />
      <div style={{  marginTop: '6rem', marginBottom: '-2rem'}}>
        <div className="underline"/>
        <h2 className="subtitle">Some of my projects</h2>
      </div>
      <section className='more-info' >

          <div className="feature">
            <div className='content' id="projects_section">
              <p className='title'>Landing page for local brewers</p>
              <p className='desc'>The page you access by scanning the QR code is specifically dedicated to a local brewery called "Ventil."
                Ventil is a craft brewery that focuses on creating high-quality, artisanal beers with unique flavors and brewing techniques. Cheers<br></br>
              </p>
              <a href="https://ventil-beer.netlify.app/" target="_blank">
                WebPage
              </a>
            </div>
            <img src={QR_code} alt="projekt" className="project-image" />
          </div>
     
          <div className='feature left'>
            <div className='content'>
              <p className='title'>Flutter mobile app</p>
              <p className='desc'>
                A Flutter App with which you can track your daily expenditures.
                It shows a Real-Time Weekly Bar Graph of the tracked Expenditures. You can also delete an added expenditure.
              </p>
              <br></br>
              <a href="https://github.com/Ranko1996/flutter_firstapp" target="_blank">Github repo</a>
            </div>
         
              <img src={flutterImg} className="project-image" alt="projekt" />
       
          </div>
          <div className='feature'>
            <div className='content'>
              <p className='title'>.NET6 web API</p>
              <p className='desc'>Hotel listing API made with C# programming language. Basic API with CRUD operations and JWT authentification</p>
              <a href="https://github.com/Ranko1996/HotelListingAPI.NET6" target="_blank">
                Github repo
              </a>
            </div>
            <img src={netCoreApiImg} className="project-image" alt="projekt" />
          </div>
      </section>
      <div id="about_section">
        <AboutMe />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  )

}

export default App;
