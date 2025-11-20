import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'E-commerce Website', image: 'https://via.placeholder.com/400x300', description: 'Modern online store' },
    { title: 'Portfolio Design', image: 'https://via.placeholder.com/400x300', description: 'Creative portfolio site' },
    { title: 'Blog Platform', image: 'https://via.placeholder.com/400x300', description: 'Content management system' },
    { title: 'Mobile App UI', image: 'https://via.placeholder.com/400x300', description: 'Responsive app design' },
    { title: 'Dashboard Analytics', image: 'https://via.placeholder.com/400x300', description: 'Data visualization' },
    { title: 'Social Network', image: 'https://via.placeholder.com/400x300', description: 'Community platform' }
  ];

  return (
    <section className="portfolio bg-light py-5" id="portfolio">
      <div className="container">
        <h2 className="text-center mb-5">Portfolio</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
