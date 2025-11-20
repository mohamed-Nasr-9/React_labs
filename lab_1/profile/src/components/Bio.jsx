import React from "react";

function Bio() {
  return (
    <section className="bio py-5" id="about">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead text-center">
              I am a passionate software engineer with a strong background in
              web development and design. I love creating beautiful and
              functional websites that provide excellent user experiences. With
              a keen eye for detail and a commitment to quality, I strive to
              deliver projects that exceed expectations.
            </p>
            <div className="text-center mt-4">
              <a href="../assets/Mohamed_Aboelkhair_CV.pdf" className="btn btn-primary btn-lg" download>
                <i className="fas fa-download me-2"></i>Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
