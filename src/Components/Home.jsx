import React from 'react'
import myImg from '../images/me1.jpeg';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import About from './About';
import { NavLink } from 'react-router-dom';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
// import ArrowDropDownCircleSharp from '@material-ui/icons/ArrowDropDownCircleSharp';


// import backImg from '../images/homebg.jpg'

const Home = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#b655fe' }} >
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        {/* <img src="images/logo.svg" height="28" alt="SHAIL DAVE" /> */}
                        <h1 className="navbar-brand App-link" style={{ color: '#feb101', fontWeight: '900' }}>SHAIL DAVE</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <a onClick={() => document.getElementById('navbarCollapse').classList.remove('show')} href="#home" className="nav-item nav-link" style={{ color: 'white' }}>Home</a>
                            <a onClick={() => document.getElementById('navbarCollapse').classList.remove('show')} href="#about" className="nav-item nav-link" style={{ color: 'white' }}>About</a>
                            <a onClick={() => document.getElementById('navbarCollapse').classList.remove('show')} href="#skills" className="nav-item nav-link" style={{ color: 'white' }}>Skills</a>
                            <a onClick={() => document.getElementById('navbarCollapse').classList.remove('show')} href="#projects" className="nav-item nav-link" style={{ color: 'white' }}>Projects</a>
                            <a onClick={() => document.getElementById('navbarCollapse').classList.remove('show')} href="#achievements" className="nav-item nav-link" style={{ color: 'white' }}>Achievements</a>

                            {/* <a href="/" className="nav-item nav-link">Profile</a>
                            <a href="/" className="nav-item nav-link">Messages</a>
                            <a href="/" className="nav-item nav-link disabled" tabindex="-1">Reports</a> */}
                        </div>
                        <div className="navbar-nav ms-auto">
                            {/* <a href="/" className="nav-item nav-link">Login</a> */}
                        </div>
                    </div>
                </div>
            </nav>

            <section id='home' style={{ paddingTop: '65px' }} data-aos="fade-up">

                <div className='container-fluid home bg' style={{ width: '100%', height: '100%', paddingBottom: '10px' }}>
                    {/* <h1>This is a home Page</h1> */}
                    <div className='container text-center'>
                        <div className='container'>
                            <img src={myImg} className="img-fluid rounded-circle my-3" style={{ width: '350px' }} alt="Img" data-aos="flip-down" />
                        </div>
                        <h2 className='mb-3' data-aos='fade-left'>Hello, I'm <strong style={{ color: '#7b00e4' }} >Shail Dave</strong>.</h2>
                        <h2 className='mb-3' data-aos='fade-right'>I'm a  <strong style={{ color: '#feb101' }}>full-stack developer</strong>.</h2>

                        <ul className="social-icons light list-inline mb-0 mt-5">

                            <li className="list-inline-item"><a href="https://www.instagram.com/shaildave7/" style={{ color: '#e95950' }}><InstagramIcon className='mx-3' /></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/shail-dave-5b674618b" style={{ color: '#oe76a8' }}><LinkedInIcon className='mx-3' /></a></li>
                            <li className="list-inline-item"><a href="https://github.com/Shail-7" style={{ color: '#171515' }}><GithubIcon className='mx-3' /></a></li>
                        </ul>


                        <p className='my-5 mb-5'>Send me an <a href="mailto:shailjdave72000@gmail.com" style={{ color: '#7b00e4', textDecoration: 'none' }}>email</a>. 👋</p>
                        {/* <ArrowDropDownCircleSharp className='mb-3' style={{fontSize:'44px',color:'feb101'}} /> */}
                    </div>
                </div>
            </section>

            <section id='about' data-aos="fade-up">
                <About />
            </section>

            <section id='skills'>
                <Skills />
            </section>

            <section id='projects'>
                <Projects />
            </section>

            <section id='achievements'>
                <Certificates />
            </section>


        </>
    );
}

export default Home;