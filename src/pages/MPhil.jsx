import React from 'react';

function MPhil() {
  return (
    <section id="courses">
      <div className="courses-container">
        <div className="course-category">
          <h2>COMPUTER SCIENCE</h2>

          <div className="level-100">
            <h3>Level 600</h3>

            <div className="semester">
              <h4>FIRST SEMESTER</h4>
              <ul>
                <li>CSCD 601 Research Methods</li>
                <li>CSCD 603 Advanced Data Structures and Algorithms</li>
                <li>CSCD 609 Principles of Wireless and Mobile Systems</li>
                <li><strong>ELECTIVES:</strong></li>
                <ul>
                <li>CSCD 607 Advanced Computer Networks</li>
                <li>CSCD 611 Advanced Database Systems</li>
                <li>CPEN 641 Advanced Operating Systems</li>
                <li>CPEN 637 Human Computer Interaction</li>
                </ul>
            </ul>

            </div>

            <div className="semester">
              <h4>SECOND SEMESTER</h4>
              <ul>
                    <li>CSCD 606 Advanced Software Engineering</li>
                    <li>CSCD 604 Distributed Systems</li>
                    <li>CSCD 610 Seminar I</li>
                    <li>CSCD 612 Intelligent Systems</li>
                    <li><strong>ELECTIVES:</strong></li>
                    <ul>
                        <li>CSCD 616 Bioinformatics</li>
                        <li>CSCD 608 Advanced Computer Vision</li>
                        <li>CSCD 614 Wireless Systems Design</li>
                        <li>CPEN 656 Networks Security</li>
                        <li>MATH 652 Computational Mathematics</li>
                        <li>CSCD 630 MPhil Thesis</li>
                    </ul>
                    </ul>
            </div>
          </div>
        </div>
        </div>

    </section>
  );
}

export default MPhil;
