import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/database.webp';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Computer Science and Engineering student with knowledge of Java, C, Python, HTML/CSS, React.js, and MongoDB. Familiar with web development, database management, and Java-based application development. Completed internships in Java Web Development and Python-based projects with hands-on experience in Spring MVC, Hibernate, JSP, Servlets, JDBC, MySQL, and Tomcat. Quick learner with strong teamwork, communication, and problem-solving skills. </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UIDesign" className='skillBarImg'  />
                <div className='skillBarText'>
                    <h2>Java Web Development</h2>
                    <p>Building full-stack web applications using Java, Spring MVC, Hibernate, JSP, Servlets, and MySQL.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'  />
                <div className='skillBarText'>
                    <h2>Frontend Development</h2>
                    <p>Creating responsive and modern user interfaces using React.js, HTML, CSS, and JavaScript.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className='skillBarImg'  />
                <div className='skillBarText'>
                    <h2>Database Management</h2>
                    <p>Managing databases and implementing CRUD operations using MySQL and JDBC.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
