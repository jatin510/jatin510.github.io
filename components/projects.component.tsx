import Project from "./project.component";

const PROJECTS = [
  {
    title: "Jobshala",
    tech: ["nodejs", "ejs", "express", "axios", "nodemailer"],
    links: [{ title: "Web", link: "https://job-search-jp.herokuapp.com" }],
    img: "images/jobshala-merged.jpeg",
    desc:
      "A website to search jobs (fake jobs) made using node, express ,axios .",
  },
];

/***********************
  Projects Component
 ***********************/

const Projects = (props) => {
  const cardBgImage = (url) => {
    return {
      backgroundImage: `url(${url})`,
    };
  };

  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of most of the projects I've worked on lately. Please,
            also visit my github account :
            <a href="https://github.com/jatin510" target="_blank">
              https://github.com/jatin510
            </a>
          </p>
        </div>
        <div className="projects-wrapper">
          {PROJECTS.map((item) => (
            <Project key={item.title} {...item}>
              <small>Built using {item.tech.join(", ")}</small>
              <p>{item.desc}</p>
            </Project>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
