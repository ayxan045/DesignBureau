import React from "react";

function AboutDesc({id, title, desc}) {


  return (
    <>
        <div className="about-us d-flex justify-between" key={id}>
          <div className="w-50">
            <h4>{title}</h4>
          </div>
          <div className="w-50">
            <p className="w-75">{desc}</p>
          </div>
        </div>
    </>
  );
}

export default AboutDesc;
