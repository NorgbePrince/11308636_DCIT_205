import React from 'react';

function Footer() {
  return (
    <footer>
      {
        <div>
          <div id='footer1'>
            <h5 className='footerhaed'>
              Accademics
            </h5>
            <ul className="list-unstyled">
              <li><a href='/courses' className='links'>Undergraduate Courses</a></li>
              <li><a href='/mphil' className='links'>Graduate Courses(MPhil Computer Science)</a></li>
              <li><a href="/msc" className='links'>Graduate Courses(MSc Computer Science)</a></li>
              <li>Graduate Courses(PhD)</li>
              <li>Academic Calendar</li>
              <li>Level 200 & 300 Timetable</li>
              <li>Course Schedule</li>
              <li>Placements For Level 200 Students</li>
              <li>Student Complaint Form</li>
            </ul>
            <h5 className='footerhaed'>Admission</h5>
            <ul className="list-unstyled">
              <li>Undergraduate</li>
              <li>Graduate</li>
              <li>International Students</li>
              <li>Entry Requirements</li>
              <li><a href="/contact" className='links'>Contact Us</a></li>
            </ul>
            <h5 className='footerhaed'>
              The Department
            </h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Department of Computer Science and Technology</li>
              <li>Computing Faculty</li>
              <li>Dept. of Mathematical Sciences</li>
            </ul>
          </div>
        </div>
      }
    </footer>
  );
}

export default Footer;
