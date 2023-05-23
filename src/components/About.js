import React, { Component } from "react";
import { Icon } from "@iconify/react";
// import angularIcon from "@iconify/icon";
// import angularIcon from "@iconify/icons-logos/angular-icon";
// import reactIcon from "@iconify/icons-logos/react";
// import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <a href="https://www.linkedin.com/in/christiankenney/">
                    <Icon
                      icon="devicon:linkedin"
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                  </a>   
                  <a href="https://github.com/Christian-Kenney">
                    <Icon
                      icon="uiw:github"
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                  </a> 
                  <a href="https://drive.google.com/file/d/1vndsWdfx7-2B_AC3BNIx5evZ9oUwiPhy/view?usp=share_link">
                    <Icon
                      icon="quill:paper"
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }} 
                    />
                  </a>
                  
                  {/* <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  /> */}
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    
                    <Icon
                    icon="emojione:red-circle"
                    />
                    &nbsp;{" "}
                    <Icon
                    icon="twemoji:yellow-circle"
                    />
                    &nbsp;{" "}
                    <Icon
                    icon="twemoji:green-circle"
                    />
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
