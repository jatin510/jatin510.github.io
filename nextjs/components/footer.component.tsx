import { HeartFilled } from "@ant-design/icons";
import { Button } from "antd";
/***********************
  Footer Component
 ***********************/

const Footer = (props) => {
  return (
    <section id="footer">
      <div className="container">
        Made with ♥️ by{" "}
        <a
          href="https://twitter.com/jatin6972"
          style={{ color: "white" }}
          target="_blank"
        >
          Jatin
        </a>
      </div>
    </section>
  );
};

export default Footer;
