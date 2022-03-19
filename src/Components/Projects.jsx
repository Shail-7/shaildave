import React from 'react'
import Heading from './Heading';
import ProjectsList from './ProjectList';
const Projects = () => {

    return (
        <>
            <div className='container'>
                {/* <h1 className="text-center my-3" style={{color:'#feb101'}}>Projects</h1>
                <h4 className='text-center my-3'>This are some of my Projects</h4> */}

                <Heading title="Projects" desc="This are some of my Projects" />
                {
                    ProjectsList.map((element) => {
                        return (
                            // console.log(element.name)

                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-12 col-sm-12 col-md-12 col-xl-12  my-3'>

                                        <div className='card my-2' data-aos="flip-down" style={{ border: '3px solid #feb101', borderRadius: '10px', backgroundColor: '#b755ff' }}>
                                            <h5 className='card-header'>{element.name}</h5>
                                            <div className='card-body'>
                                                <p className=''>{element.description}</p>

                                                {element.linkPresent ? <a href={element.link}>
                                                    <button className='xbadge rounded-pill' style={{ width: '200px', height: '50px', backgroundColor: '#feb101', color: 'white' }}>View Project</button>
                                                </a> : null}

                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>
                        );
                    })
                }

            </div>
        </>
    );
}

export default Projects;