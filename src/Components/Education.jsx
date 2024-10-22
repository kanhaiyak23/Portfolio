// Education.js

import React from "react";
import PropTypes from "prop-types";
import "./Education.css"; // Import your CSS for styling if needed

const Education = () => {
  // Sample education data (you can customize this)
  const educationDetails = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & AI",
      institution: "Newton School of Technology",
      year: "2022 - Present",
    },
    {
      degree: "High School Diploma",
      field: "Science",
      institution: "XYZ High School",
      year: "2019 - 2021",
    },
    {
      degree: "Certification in Web Development",
      field: "Web Development",
      institution: "Online Course",
      year: "2021",
    },
    {
      degree: "Certification in Data Structures",
      field: "Computer Science",
      institution: "Online Course",
      year: "2023",
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-grid">
        {educationDetails.map((edu, index) => (
          <div className="education-cell" key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.field}</p>
            <p>{edu.institution}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

Education.propTypes = {
  educationDetails: PropTypes.array,
};

export default Education;
