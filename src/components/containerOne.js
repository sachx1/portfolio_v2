import React from 'react';
import './styles/containerOne.css';
    
const ContainerOne = () => {

    return (
        <div>
            <div className='containerTitle'>
                <h1>Sachin Khargie <br /> Full Stack Developer</h1> 
            </div>
            <div className='containerBtn'>
                <p>Experience in both Front End and Back End Development using 
                    JavaScript, ReactJS and Python!
                </p>
            </div>
            <div className='containerBtn'>
                <button>This is a button</button>
            </div>
        </div>
    );
}
    
export default ContainerOne;