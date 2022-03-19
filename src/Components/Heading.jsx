import React from 'react'

const Heading=(props)=>{
    return(
        <>
          <h1 className='text-center my-3' data-aos="fade-in" style={{color:'#feb101',fontWeight:'900'}}> {props.title} </h1>
                <h4 className='text-center my-3' data-aos="fade-in" style={{color:'white'}}>{props.desc}</h4>

        </>
    );
}

export default Heading;