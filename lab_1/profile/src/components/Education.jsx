import React from 'react';

function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      year: '2019 - 2023',
      description: 'Focus on Programming and Database Management'
    }
  ];

  return (
    <section className="education py-5" id="education">
      <div className="container">
        <h2 className="text-center mb-5">Education</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {education.map((edu, index) => (
              <div key={index} className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">{edu.degree}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{edu.school}</h6>
                  <p className="text-muted">
                    <i className="far fa-calendar-alt me-2"></i>{edu.year}
                  </p>
                  <p className="card-text">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
