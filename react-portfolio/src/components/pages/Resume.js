import React from 'react';
import ResumeFile from '../../assets/resume/Manzione_Anthony_Resume_2023_.png'



export default function Resume() {
  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Resume</h1>
      <br></br>
      <hr></hr>
      <br></br>
      <div className='container'>
      </div>
      <div className='row'>
        <div className='col d-flex flex-sm-column align-items-center'>
          <a href={ResumeFile} target='__blank'>View Resume</a>
          <br></br>
          <a href={ResumeFile} download>Download Resume</a>
        </div>
      </div>
      <br></br> 
    </div>
  );
}
