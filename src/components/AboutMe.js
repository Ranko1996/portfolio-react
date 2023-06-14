import AboutMeImg from '../images/aboutMe2.jpg'
import DiplomaImg from '../images/diploma.jpg'
import './AboutMe.scss'
const AboutMe = () => {
 
    return (
        <>
            <title>About Me Section</title>
            <body>
                <section className="about">
                    <div className="main">
                        <div className='about_me'>
                            <img style={{ height: 250, width: 250,}} src={DiplomaImg} />
                        </div>
                        <div className='about_me'>
                            <h2>About Me</h2>
                            <p className='desc'>I am a web developer with a background in JavaScript and C# .Net core framework. 
                                I have a degree in computer science and I'm currently working as a developer. 
                                I am passionate about building functional websites that provide a seamless user experience.
                                In my spare time, I enjoy staying up-to-date with the latest developments in web technologies and exploring new frameworks and libraries.
                            </p>          
                        </div>
                        
                    </div>
                </section>
            </body>
        </>
    )
}

export default AboutMe