import React from 'react'
import Heading from './Heading';
import skillImgs from './SkillImg';

const Skills = () => {
    return (
        <>
            <div className='container'>
                {/* <h1 className='text-center my-3' style={{color:'#feb101'}}> Skills </h1>
                <h4 className='text-center my-3' style={{color:'white'}}>Here are some of the Programming languages and Technologies which i've worked on</h4> */}
                <Heading title="Skills" desc="Here are some of the Programming languages and Technologies which i've worked on" />

                <div className="container text-center">
                    <div className='row'>
                        {
                            skillImgs.map((element) => {
                                return (
                                    <div className='col-6 col-sm-6 col-md-3 col-xl-3'  data-aos="flip-up">
                                        <img className='my-3' src={element.path} alt={element.name} style={{ width: '100px', height: '100px' }} />
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;