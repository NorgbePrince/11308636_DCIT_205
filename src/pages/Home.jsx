import React from 'react';
import image from '../images/cspic1.jpg'
import video from '../videos/csvideo.mp4'
function Home() {
  return (
    <section id="home">
      {<div className='one-with-video'>
        <div class="video-container"></div>
        <video autoPlay loop className='play'>
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
      </div>
       <div className='image-side'>
              <img src={image} alt='' id='pic'/>   
      <div className='beside-image'>
        <h1>Departmental Events</h1>
        <p>Programmes, seminars and events organized by the department</p>
        <button>view upcoming and ongoing events</button>
        </div>
      </div>  
      <div className='offer'>
          <h1 className='offer-text'>Short courses we offer</h1>
          <p className='offer-text'>Our eight week intensive certificate course is open to senior high school graduates, tertiary students, school graduates, workers and the general public.</p>
          <p className='offer-text'>Evening and weekend sessions only</p>
      </div>
      <div className="cards-container">
      {/* Card 1: Information Security and Ethical Hacking */}
      <div className="card">
        <h2>Information Security and Ethical Hacking</h2>
        <p>
          Learn the various techniques used to secure a computer system from attacks through hacking.
        </p>
      </div>

      {/* Card 2: Computer Network Fundamental [CCNA] */}
      <div className="card">
        <h2>Computer Network Fundamental [CCNA]</h2>
        <p>
          We provide quality training for students to become a Cisco Certified Network Associate (CCNA).
        </p>
      </div>

      {/* Card 3: Mobile Application Development */}
      <div className="card">
        <h2>Mobile Application Development</h2>
        <p>
          We provide world-class technologies for Mobile Application Development using the mobile-first worklight by IBM.
        </p>
      </div>

      {/* Card 4: Introduction to web programming */}
      <div className="card">
        <h2>Introduction to Web Programming</h2>
        <p>
          Understand the fundamentals of web technologies and create web-based applications with the latest technologies.
        </p>
      </div>
    </div>

    </section>
    
  );
}

export default Home;
