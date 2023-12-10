import React from 'react';
import './styles/workCard.css'

const JobCard = ({ job }) => {
  const { Employer, JobTitle, YOE, Location, Style, Description } = job;

  return (
    <div className="card">
      <h2>{Employer}</h2>
      <p>Job Title: {JobTitle}</p>
      <p>Years of Experience: {YOE}</p>
      <p>Location: {Location}</p>
      <p>Style: {Style}</p>
      <p>Job Description: </p>

      <ul>
        {Description.map((point, index) => (
            <>
                <li key={index}><p>{point.PointOne}</p></li>
                <li key={index}><p>{point.PointTwo}</p></li>
                <li key={index}><p>{point.PointThree}</p></li>
                <li key={index}><p>{point.PointFour}</p></li>
                <li key={index}><p>{point.PointFive}</p></li>
                {point.PointSix && <li key={index}><p>{point.PointSix}</p></li> }
            </>
        ))}
      </ul>
    </div>
  );
};

export default JobCard;
