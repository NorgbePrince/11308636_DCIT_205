import React from 'react';
import image from '../images/dephead.jpg'
import video from '../videos/csvideo.mp4'
function Staff() {
  return (
    <section id="home">
      {<div className='one-with-video'>
        <div class="video-container"></div>
        <video autoPlay="true" className='play' >
        <source src={video} type='video/mp4'></source>
        </video>
        <h1>YOUR GATEWAY TO WORLD CLASS COMPUTER SCIENCE EDUCATION</h1>
        </div>}
      <div className='d-flex'>
        <div className='cards'>
        <h3>Short Courses</h3>
        <p className='cardtext'>
          Our eight week intensive certificate course is open to senior high school graduates, tertiary students, school graduates, workers and the general public.
        </p>
        <button>Read More</button>
      </div>
      <div className='cards'>
        <h3>Undergraduate programmes</h3>
        <p className='cardtext'>
          Open the door to sought-after technology careers with a world class Bachelor of science in Computer science degree.
        </p>
        <button>Read More</button>
      </div>
      <div className='cards'>
        <h3>MPhil and Msc programmes</h3>
        <p className='cardtext'>
          Embrace world class graduate education with unique blend of cutting-edge research and industry experience.
        </p>
        <button>Read More</button>
      </div>
      <div className='cards'>
        <h3>PhD Programmes</h3>
        <p className='cardtext'>
          Our PHDs lead the effort to extend the boundaries of knowledge through quality and industry relevant research.
        </p>
        <button>Read More</button>
      </div>
      <div id='dephead'>
        <img src={image} alt="" id='dep'/>
        <h1>Head of Department's office</h1>
      </div>
      </div>
      <div className='offer'>
          <h1 className='offer-text'>Short courses we offer</h1>
          <p className='offer-text'>Our eight week intensive certificate course is open to senior high school graduates, tertiary students, school graduates, workers and the general public.</p>
          <p className='offer-text'>Evening and weekend sessions only</p>
      </div>

    </section>
    
  );
}

export default Staff;
