import {
  GlobalOutlined,
  AppleOutlined,
  AndroidOutlined,
} from "@ant-design/icons";
/***********************
  Project Component
 ***********************/

import { Button } from "antd";

const Project = ({ title, links, img, children }) => {
  return (
    <div className="project">
      <div className="card-wrap">
        <div className="card">
          <div className="card-bg">
            <img src={img} alt={"Screenshot of " + title} width="115%" />
          </div>
        </div>
      </div>

      {/* <a
        className="project-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="project-image"
          src={props.img}
          alt={"Screenshot of " + props.title}
        />
      </a> */}
      <div className="project-details">
        <div className="project-tile">
          {/* <p className="icons">
            {props.tech.split(" ").map((t) => (
              <i className={tech[t]} key={t} />
            ))}
          </p> */}
          {title}
        </div>

        {children}

        <div className="buttons">
          {links.map(({ title, link }) => {
            let icon =
              title === "Web" ? (
                <GlobalOutlined />
              ) : title === "iOS" ? (
                <AppleOutlined />
              ) : (
                <AndroidOutlined />
              );
            return (
              <Button
                key={title}
                icon={icon}
                type="dashed"
                ghost
                danger
                href={link}
                target="_blank"
              >
                {title}
              </Button>
            );
          })}
        </div>

        {/* <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
