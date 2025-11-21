import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'E-commerce Website', image: '/enhance the uploaded.png', description: 'Modern online store' },
    { title: 'Portfolio Design', image: '/enhance the uploaded.png', description: 'Creative portfolio site' },
    { title: 'Blog Platform', image: '/enhance the uploaded.png', description: 'Content management system' },
    { title: 'Mobile App UI', image: '/enhance the uploaded.png', description: 'Responsive app design' },
    { title: 'Dashboard Analytics', image: '/enhance the uploaded.png', description: 'Data visualization' },
    { title: 'Social Network', image: '/enhance the uploaded.png', description: 'Community platform' }
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
