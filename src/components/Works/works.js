import React from 'react';
import './works.css';

import Portfolio1 from '../../assets/FreshMart.png';
import Portfolio2 from '../../assets/Ecommorce.png';
import Portfolio3 from '../../assets/Spring MVC.png';
import Portfolio4 from '../../assets/Refokus.Clone.png';
import Portfolio5 from '../../assets/Registration_page.png';
import Portfolio6 from '../../assets/Edusity.png';

const Works = () => {
  return (
    <section id='works'>

      <h2 className="worksTitle">My Portfolio</h2>

      <span className='workDesc'>
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.
      </span>

      <div className='worksImgs'>

        {/* Project 1 */}
        <a
          href='https://github.com/yashtailor3009/FreshMart-Ecommerce'
          target='_blank'
          rel='noreferrer'
          className='projectCard'
        >
          <img src={Portfolio1} alt="Portfolio1" className="worksImg" />

          <div className='overlay'>
            <h2>FreshMart</h2>
            <p>Spring MVC Grocery Website</p>
          </div>
        </a>

        {/* Project 2 */}
        <a
          href='https://github.com/yashtailor3009/ecommerce'
          target='_blank'
          rel='noreferrer'
          className='projectCard'
        >
          <img src={Portfolio2} alt="Portfolio2" className="worksImg" />

          <div className='overlay'>
            <h2>Ecommerce React.js</h2>
            <p>Website using React.js</p>
          </div>
        </a>

        {/* Project 3 */}
        <a
          href='https://github.com/yashtailor3009/spring-mvc-hibernate-crud'
          target='_blank'
          rel='noreferrer'
          className='projectCard'
        >
          <img src={Portfolio3} alt="Portfolio3" className="worksImg" />

          <div className='overlay'>
            <h2>Spring MVC Hibernate CRUD Application</h2>
            <p>Java + MySQL CRUD Project</p>
          </div>
        </a>

        {/* Project 4 */}
        <a
          href='https://github.com/yashtailor3009/Refokus.Clone/tree/main'
          target='_blank'
          rel='noreferrer'
          className='projectCard'
        >
          <img src={Portfolio4} alt="Portfolio4" className="worksImg" />

          <div className='overlay'>
            <h2>Refokus Clone</h2>
            <p>Modern Refokus website clone built with React, Tailwind CSS, and smooth animations.</p>
          </div>
        </a>

        {/* Project 5 */}
        <a
          href='https://github.com/yashtailor3009/JSP-Login-CRUD-ForgotPassword'
          target='_blank'
          rel='noreferrer'
          className='projectCard'
        >
          <img src={Portfolio5} alt="Portfolio5" className="worksImg" />

          <div className='overlay'>
            <h2>JSP Login & Registration System</h2>
            <p>Secure JSP-based login and CRUD system with user authentication and forgot password functionality.</p>
          </div>
        </a>

        {/* Project 6 */}
        <a
          href='https://github.com/yashtailor3009/Edusity'
          target='_blank'
          rel='noreferrer'
          className='projectCard'
        >
          <img src={Portfolio6} alt="Portfolio6" className="worksImg" />

          <div className='overlay'>
            <h2>Edusity</h2>
            <p>Edusity is a modern and responsive educational website built using React.js. 
                It features a clean user interface with smooth scrolling navigation, interactive sections, 
                student testimonials, campus gallery, and a fully functional contact form powered by Web3Forms.
            </p>
          </div>
        </a>

      </div>
      <button className='workBtn'>See More</button>

    </section>
  );
};

export default Works;