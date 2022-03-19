import React from 'react'
import myImg from '../images/me2.jpg'
import Heading from './Heading';

const About = () => {
    return (<>
        {/* This is an About Page */}

        <div className="container">
            {/* <h1 className='text-center my-3' style={{color:'#feb101'}}>About</h1> */}

            <Heading title="About" desc="" />
            <div className='row'>
                <div className='container col-12 col-sm-12 col-md-4 col-xl-4'>
                    <img src={myImg} className="img-fluid" alt="Img" style={{ height: '600px', borderRadius: '20px' }} data-aos="flip-down" />
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-xl-8 my-4' >
                    <div className='p-4 text-body' style={{borderRadius:'20px',border:'3px solid #feb101',backgroundColor:'#b755ff'}}>
                        <h5 style={{color:'white'}} data-aos="flip-down">
                            My name is Shail Dave and i am a full-stack web developer. I have completed my Bsc(CA & IT) from KS School of Business Management and Information Technology. Currently i'm pursuing my Msc(CA & IT). I like to solve the problems of others through my skills and i try to provide them solution for the same.
                            <br /><br />
                            Main goal is to keep learning and improving the skills and exploring the new things!
                        </h5>
                        </div>
                        <div className="container text-center">
                            <a href="https://drive.google.com/file/d/1krQQQSKfbhD1pQm7xsCBRLWxDq4ycLDt/view?usp=sharing">
                                <button className='badge rounded-pill mt-5' style={{ width: '200px', height: '50px', backgroundColor: '#feb101' }}>View my Resume</button>
                            </a>
                            
                        </div>
                   
                </div>

            </div>

        </div>
    </>)
}
export default About;