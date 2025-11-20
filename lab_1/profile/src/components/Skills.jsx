import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Bootstrap', level: 88 },
    { name: 'Node.js', level: 75 }
  ];

  return (
    <section className="skills bg-light py-5" id="skills">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-bold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress" style={{ height: '25px' }}>
                  <div
                    className="progress-bar bg-dark"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
