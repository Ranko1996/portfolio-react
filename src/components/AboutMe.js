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
                            <p className='desc'>Welcome to my portfolio website! I'm a web and mobile application developer experienced in creating innovative solutions.
                            I specialize in building web and mobile apps using React, Angular, and Flutter. I'm also proficient in Node.js, Nest framework, C#, and .NET Core API.
                            
                            </p>          
                        </div>
                        
                    </div>
                </section>
            </body>
        </>
    )
}

export default AboutMe