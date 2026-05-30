import React, { useState } from 'react';
import './experience.css';

const Experience = () => {

  const [certificate, setCertificate] = useState(null);

  return (
    <section id="experience">

      <h2 className="experienceTitle">Experience</h2>
      <span className="experienceDesc">
        My internship and project-based work experience.
      </span>

      <div className="experienceContainer">

        {/* Bulwark */}
        <div className="experienceCard">
          <div className="experienceHeader">
            <div>
              <h3>Bulwark System</h3>
              <p className="experienceRole">
                Internship Trainee | Jan 2026 – Apr 2026
              </p>
            </div>

            <button
              className="certificateBtn"
              onClick={() =>
                setCertificate(
                  "https://drive.google.com/file/d/17G926peqWg6l31tuGhyBOOjKkyzm-A1Y/preview"
                )
              }
            >
              View Certificate
            </button>
          </div>

          <ul>
            <li>Developed Java web applications including JSP Login and Spring MVC CRUD application.</li>
            <li>Worked with Spring MVC, Hibernate, JSP, Servlets, JDBC, MySQL and Tomcat.</li>
            <li>Conducted testing and prepared project documentation.</li>
          </ul>
        </div>

        {/* Maangler */}
        <div className="experienceCard">
          <div className="experienceHeader">
            <div>
              <h3>Maangler Private Limited</h3>
              <p className="experienceRole">
                Project-Based Internship | Sep 2024
              </p>
            </div>

            <button
              className="certificateBtn"
              onClick={() =>
                setCertificate(
                  "https://drive.google.com/file/d/1NsRry8gf1mNMnRtCdnjMZ2T1bET9pnGF/preview"
                )
              }
            >
              View Certificate
            </button>
          </div>

          <ul>
            <li>Completed internship focused on Python fundamentals and development.</li>
            <li>Delivered projects within deadlines.</li>
          </ul>
        </div>

        <div className="experienceCard">
          <div className="experienceHeader">
            <div>
              <h3>Muskurahat Foundation</h3>
              <p className="experienceRole">
                Remote Intern | Nov 2022 – Dec 2022
              </p>
            </div>

            <button
              className="certificateBtn"
              onClick={() =>
                setCertificate(
                  "https://drive.google.com/file/d/1vO7V7PgUXHOPKBMPcLlQYnMe7DHkQ1Sg/preview"
                )
              }
            >
              View Certificate
            </button>
          </div>

          <ul>
             <li> Worked on fundraising campaigns and donor outreach activities.</li>
            <li> Raised funds through networking and online communication.</li>
            <li> Collaborated remotely with mentors and team members.</li>
            <li> Improved communication, teamwork, and interpersonal skills.</li>
          </ul>
        </div>

      </div>

      {/* Modal */}
      {certificate && (
        <div
          className="certificateModal"
          onClick={() => setCertificate(null)}
        >
          <div
            className="certificateContent"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={certificate}
              title="Certificate"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
};

export default Experience;