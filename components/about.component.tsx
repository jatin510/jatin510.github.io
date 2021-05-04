/***********************
  About Component
 ***********************/

const About = (props) => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Jagdish.</h4>
            <p>I am a web developer based in the Uttarakhand, India.</p>
            <p>
              I really enjoy solving problems as well as making things pretty
              and easy to use. I can't stop learning new things; the more, the
              better. I also watching anime.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            {/* className desc for dividing into two parts */}
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              {/* For the front-end I usually work with Javascript, either
              standalone or including popular frameworks like ReactJS . I also
              make the web pretty by using Sass, CSS and, whenever needed, any
              of their friends: Bootstrap, etc. */}
              I am a the Software Developer , currently working for the US-based
              firm, remotely. I primarily works on back-end, work in Nodejs and
              little bit of Python. For the database I usually work on NoSQL
              database such MongoDB.
            </p>
            <p>For the front-end I usually work in the ReactJS.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
