import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Icon } from "@iconify/react";

class Education extends Component {
  

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };
    
    if(this.props.sharedEducation && this.props.resumeBasicInfo){
      var sectionName = this.props.resumeBasicInfo.section_name.Education;
      var education = this.props.sharedEducation.schools.map(function (Education, i) {
        return (
          // <div>
          //   <h1>
            
          //   </h1>
          //   <Card style={{ width: '18rem' }}>
          //     <Card.Img variant="top" src={Education.image} />
          //     <Card.Body>
          //       <Card.Title>{Education.name}</Card.Title>
          //       <Card.Text>
          //         {Education.degree}
          //       </Card.Text>
          //     </Card.Body>
          //   </Card>

          // </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={Education.degree}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(Education)}>
                <div>
                  <img
                    src={Education.image}
                    alt="EducationImage"
                    height={150}
                    width={100}
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{Education.date}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {Education.name}
                  </p>
                  <p className="project-title-settings mt-4">
                    {Education.degree}
                  </p>
                </div>
              </div>
            </span>
          </div>
          
          
        );
      });
    }

    return (
      <section id="portfolio">

        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{education}</div>
          </div>
        </div>
        
      </section>
    );
  }
}

export default Education;
