/***********************
  Social Links Component
 ***********************/

const SocialLinks = (props) => {
  return (
    <div className="social">
      <a
        href="https://twitter.com/jatin6972"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Twitter profile"
      >
        {" "}
        <i className="fab fa-twitter" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/jatinp510"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {" "}
        <i className="fab fa-github" />
      </a>
    </div>
  );
};

export default SocialLinks;
