import React from 'react';
import image1 from '../images/about1.jpg'
import image2 from '../images/about2.jpg'
import image3 from '../images/about3.jpg'
import image4 from '../images/new2.jpeg'
import video from '../videos/about1.mp4' 


function About() {
  return (
    <section id="About">
      {
        <div className='abouttitle'>
          <img src={image4} alt='' id='cover'/>
        <div id='overlay'>
            <h1>About Us</h1>
        </div>
        <div>
            <h1>Welcome</h1>
            <p className='text'>
            This is the Information Technology age and at its core is Computer Science. The study of computer science is therefore critical if society is to take full advantage of the benefits Information Technology has to offer and make rapid economic advances. Computer science involves the study and development of applications that allow for our everyday use of computers, the software systems that support these applications, and the means and methods used to produce both applications and systems that behave reliably, correctly and ethically. At the heart of Computer Science lies the skill of computer programming and employers who hire Computer Scientists expect adept programmers with knowledge of current techniques and tools and the ability to apply sound engineering principles to the development, construction and maintenance of computer programs.<br></br>
The range of courses available in the department and the skills acquired by students enable them to find employment in many diverse fields of the economy and prepare our graduates for the computing industry, working in a project team (or research and development team), and to enable the graduate to bring specialist skills to that team. The course also provides the platform for further study or research through exposure to established and emerging technologies and methods, and to active fields of research in Computer Science.<br></br>
The Department offers two undergraduate degree programmes, Bachelor of Science in Computer Science Single-Major (3:2:1:1) and Major-Minor (3:2:2:1) as well as Bachelor of Science in Information Technology.
            </p>
        </div>
        <div className='about'>
            <h1>Get to know us</h1>
            <p>
Things get interesting because you are eager to know more , or you become eager to know more because it is interesting?</p>
        </div>
        <div className='about fade-in'>
        <div className='about'>
        <img src={image1} alt="" className='image1'/>
        <h1 className='sidetext1'>Our Organization</h1>
        <p className='sidetext1'>The University of Ghana is one of the Africa's most preeminent public universities. Our impact on individuals, our region and the world is profound. whether we are launching young people into a boundless future or confronting the grand challenges of our time through dauntless research. UG educates more than 38,000students annually, with approximately 2.64% being computer science students. We turn ideas into impact and transform the world around us. For more about our impact, visit our news site, UG News.</p>
        </div>
        <div className='about'>
            <img src={image2} alt="" className='image2' />
            <h1 className='sidetext2'>Our community</h1>
            <p className='sidetext2'>If you are inspired by a big challenge, you've come to the right place! The computer science community at the univrersity of Ghana encourages it's people to be vibrant and brave in taking on new challenges that push boundries beyond imagination.</p>
            
        </div>
        <div className='about'>
            <img src={image3} alt="" className='image3'/>
            <h1 className='sidetext3'>Distance Learning</h1>
            <p className='sidetext3'>Experience a UG-CDCD classroom from wherever you are. Take advantage of real-time lectures and personal interaction with professors through a suite of online delivery options, customizing your degree to fit your schedule. Our online classroom maintains the same level of academic rigor, while providing students with more ways of learning.</p>
        </div>
        <div className='about'>
            <h1 className='sidetext4'>Building Our Future</h1>
            <p className='sidetext4'>So what defines our students, faculty and community members? Above all, its our belief in the infinite possibilitie and our unshakable optimism. Its a connection to others near and far. A hunger for socio-economic transformation that pushes us to tackle challenges and pursue progress. Its the conviction that together we can create a world of good. Join us on the journey.</p>
            <video src={video} type='video/mp4' className='video'></video>
        </div>
        </div>

        </div>

      }
    </section>
  );
}

export default About;
