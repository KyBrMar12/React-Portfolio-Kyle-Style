import React from 'react';
import Project from './Project';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Mailbox rental application',
      image: '/images/Medium mailboxes.png',
      deployedLink: 'https://kybrmar12.github.io/Team-Ship-N-Go/',
      repoLink: 'https://github.com/KyBrMar12/Team-Ship-N-Go.git',
    },
    {
      title: 'Vehicle Builder',
      image: '/images/toyota tundra photo.avif',
      deployedLink: 'https://drive.google.com/file/d/12qbA4ETUGOh14LsDdgoOSGStazdA3Ssn/view',
      repoLink: 'https://github.com/KyBrMar12/Amazing-Vehicle-Builder-Kyle-Style.git',
    },
    {
      title: 'Employee Tracker',
      image: '/images/office space photo.jpg',
      deployedLink: 'https://drive.google.com/file/d/1WbTs-4VQaHU2jjkq2VhXJD8-lvuxwVVb/view',
      repoLink: 'https://github.com/KyBrMar12/Employee-Tracker-Super-Kyle-Style.git',
    },
    {
      title: 'README.md Generator',
      image: '/images/nodejs photo.png',
      deployedLink: 'https://drive.google.com/file/d/12s1NGh0PzDYathmIDTokQUg58NTwh7dU/view',
      repoLink: 'https://github.com/KyBrMar12/Generated-README-Kyle-Style.git',
    },
    {
      title: 'Weather Dashboard',
      image: '/images/earth photo.jpg',
      deployedLink: 'https://deployed-project5.com',
      repoLink: 'https://github.com/KyBrMar12/Weather-Dashboard-Kyle-Style.git',
    },
    {
      title: 'React Portfolio',
      image: '/images/react js photo.jpg',
      deployedLink: 'https://deployed-project6.com',
      repoLink: 'https://github.com/KyBrMar12/React-Portfolio-Kyle-Style.git',
    },
  ];

  return (
    <section className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
