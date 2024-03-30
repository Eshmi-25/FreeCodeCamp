import React from 'react';
import './Dashboard.css';
import JavaS from '../../assets/js.png';
import Backend from '../../assets/backend.png';
import Quality from '../../assets/quality.png';
import reacticon from '../../assets/react.png';
import Virtualization from '../../assets/virtualization.png';
import Webdev from '../../assets/webdev.png';
import DashboardNavbar from '../Dashboard_navbar/Dash_nav';

function Dashboard() {
  return (
    <div>
      <DashboardNavbar/>
      <div className="welcome">
        <h3 className="title2">Welcome to freeCodeCamp.org</h3>
        <p>"I have not failed. I've just found 10,000 ways that won't work."</p>
        <p>- Thomas A. Edison</p>
      </div>
      <div className="certifications">
        <br></br>
        <ul>
          <li className="course-item">
            <img src={Webdev} alt="Course" className="course-icon" />
            <span>Responsive Web Design Certification (300 hours)</span>
          </li>
          <li className="course-item">
            <img src={Webdev} alt="Course" className="course-icon" />
            <span>Legacy Responsive Web Design Certification (300 hours)</span>
          </li>
          <li className="course-item">
            <img src={JavaS} alt="Course" className="course-icon" />
            <span>JavaScript Algorithms and Data Structures Certification (308 hours)</span>
          </li>
          <li className="course-item">
            <img src={reacticon} alt="Course" className="course-icon" />
            <span>Front End Development Libraries Certification (300 hours)</span>
          </li>
          <li className="course-item">
            <img src={Virtualization} alt="Course" className="course-icon" />
            <span>Data Visualization Certification (300 hours)</span>
          </li>
          <li className="course-item">
            <img src={Backend} alt="Course" className="course-icon" />
            <span>Back End Development and APIs Certification (300 hours)</span>
          </li>
          <li className="course-item">
            <img src={Quality} alt="Course" className="course-icon" />
            <span>Quality Assurance Certification (380 hours)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
