import React, { useState, useEffect } from 'react';
import JobCard from './jobCard'; 
import './styles/containerTwo.css';

const JobList = ({ jobs }) => {
    return (
      <div>
        {Object.keys(jobs).map((employer) => (
          <JobCard key={employer} job={jobs[employer][0]} />
        ))}
      </div>
    );
  };
        
const ContainerTwo = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://work-experience-65773cac05ee.herokuapp.com/Jobs');
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    }, []);

    console.log(data);
    return (
        <div>
            <div className='about'>
                <p>
                    As a kid I always had an innate curiosity of how things worked.
                    More specifically, how do cars and tech work? How does a car go
                    to and from it's destination? How is a website built? What makes
                    the buttons take you to another webpage? How was RuneScape built?
                    As I got older I started to go down the rabbit hole of
                    coding, building PC's, and decided this was something I wanted to
                    pursue as a career. <br /> <br />

                    Fast forward to today, I am focused on my mission for 
                    <a href='https://www.toromontcat.com/' target="_blank" rel="noopener noreferrer"> Toromont Cat </a> to
                    develop a system using Python, ReactJS and JavaScript which sends 
                    notifications to our customers using our custom API's and 
                    <a href='https://www.twilio.com/en-us?utm_source=google&utm_medium=cpc&utm_term=twilio&utm_campaign=G_S_NAMER_Brand_ROW_RLSA&cq_plac=&cq_net=g&cq_pos=&cq_med=&cq_plt=gp&gad_source=1&gclid=CjwKCAiAmsurBhBvEiwA6e-WPPhDLncnGCEt_Yj9o14u6yp5m5u_0CXd8wqteQKkg7TlK03hxjGbCRoCYAkQAvD_BwE' target="_blank" rel="noopener noreferrer"> Twilio. </a><br />
                    <br />

                    When I am not working, I am either developing projects on the side in order
                    to bolster my knowledge of Back-End and Front-End Development, 
                    tinkering with my Mustang and racing on the track, hanging out with 
                    friends and family, or travelling to new destinations.
                </p>
            </div>
            <div>
                {data && <JobList jobs={data} />}
            </div>
        </div>
    )
}
        
export default ContainerTwo;