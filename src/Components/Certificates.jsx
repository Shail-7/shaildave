import React from 'react'
import Heading from './Heading';
import certificatesData from './certificatesdata';
const Certificates = () => {

    return (
        <>
            <div className='container'>
                <Heading title="Certificates" desc="Here are some of my certificates" />
                <div className='row text-center'>

                    {
                        certificatesData.map((element) => {
                            return (

                                <div className='col-12 col-sm-12 col-md-4 col-xl-4 my-3'>
                                    <img className='img-fluid' src={element.imgSrc} alt={element.name} style={{borderRadius:'20px',border:'5px solid #feb101',height:'310px'}}   data-aos="flip-down" />
                                </div>
                            );
                        })
                    }
                </div>


            </div>
        </>
    );

}

export default Certificates;