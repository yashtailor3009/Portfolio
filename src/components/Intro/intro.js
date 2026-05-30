import React, { useState } from 'react'
import './intro.css';
import bg from '../../assets/Yash.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import resume_icon from '../../assets/resume.png'

const Intro = () => {

  const [resume, setResume] = useState(false);

  return (
    <section id="intro">
      <div className='introContent'>

        <span className="hello">Hello,</span>

        <span className="introText">
          I'm <span className="introName">Yash Tailor</span>
          <br />
          Website Designer
        </span>

        <p className="introPara">
          I am a skilled web designer with experience in creating
          <br />
          visually appealing and user friendly websites.
        </p>

        <div className="introButtons">

          <Link>
            <button className="btn">
              <img src={btnImg} alt="Hire" className="btnImg" />
              Hire Me
            </button>
          </Link>

          {/* Resume Button */}
          <button
            className="resumeLink"
            onClick={() => setResume(true)}
          >
            <img src={resume_icon} alt="resume_icon" className="resume" />
            Resume
          </button>

        </div>

      </div>

      <img src={bg} alt="Profile" className='bg' />

      {/* Resume Modal */}
{resume && (
  <div
    className="resumeModal"
    onClick={() => setResume(false)}
  >
    <div
      className="resumeContent"
      onClick={(e) => e.stopPropagation()}
    >

      <div className="resumeViewer">

        <div className="resumeTopBar">
          <a
            href="https://drive.google.com/uc?export=download&id=1Iq1lLXxllxyB1wWJqZaIRPhSYi3pdeVx"
            className="downloadResumeBtn"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>

        <iframe
          src="https://drive.google.com/file/d/1Iq1lLXxllxyB1wWJqZaIRPhSYi3pdeVx/preview"
          title="Resume"
        ></iframe>

      </div>

    </div>
  </div>
)}

    </section>
  )
}

export default Intro;