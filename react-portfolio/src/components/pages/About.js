import React from 'react';
import AuthorImage from '../../assets/images/Anthony-Portrait.jpg'

export default function About() {
  return (
    <div className='container mt-3'>
      <h1 className='text-center'>About Me</h1>
      <hr className='mb-4 '></hr>
      <div className=' d-flex justify-content-center custom-wrap'>
        <div className='col-sm-4'>
            <img className='author-image'src={AuthorImage} alt=''></img>
        </div>
        <div className='col-sm-5'>
          <p class="text-right custom-text m-4">Hello and thank you for visiting my site, my name is Anthony Manzione and I am a software engineer and fullstack web developer. My love for technology started as a child, I was obsessed with video games and grew up with a controller in my hand. Now a days I enjoy spending my free time rock climbing, and getting outside.</p>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
