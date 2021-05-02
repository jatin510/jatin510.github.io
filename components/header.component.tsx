import { Avatar, List, Tooltip } from "antd";
import Icon from "@ant-design/icons";
import {
  FacebookSvg,
  YoutubeSvg,
  InstagramSvg,
  TwitterSvg,
} from "../components/icons";

const FacebookIcon = (props) => <Icon component={FacebookSvg} {...props} />;
const InstagramIcon = (props) => <Icon component={InstagramSvg} {...props} />;
const TwitterIcon = (props) => <Icon component={TwitterSvg} {...props} />;
const YoutubeIcon = (props) => <Icon component={YoutubeSvg} {...props} />;

const socialIcons = [
  {
    title: "Facebook",
    url: "https://web.facebook.com/jatinp510",
    icon: <FacebookIcon style={{ fontSize: "22px" }} />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/jatin_510/",
    icon: <InstagramIcon style={{ fontSize: "22px" }} />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/jatin6972",
    icon: <TwitterIcon style={{ fontSize: "22px" }} />,
  },
];

/***********************
  Header Component
 ***********************/
const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="forest" />

      <div className="profile">
        <div className="image">
          <Avatar
            size={{ xs: 216, sm: 216, md: 216, lg: 216, xl: 216, xxl: 216 }}
            src="https://avatars.githubusercontent.com/u/23024059?v=4"
          />
        </div>
        <div className="info">
          <h1>
            Hey! I’m <b>Jagdish</b>
          </h1>
          <p>
            I am a <strong>Web Developer</strong> based in Uttarakhand, India. I really enjoy solving problems as well as
            making things pretty, clean and easy to use. I can't stop learning
            new things; the more, the better. 
          </p>

          <List
            itemLayout="vertical"
            dataSource={socialIcons}
            renderItem={(icon) => (
              <Tooltip title={icon.title}>
                <a href={icon.url} target="_blank">
                  {icon.icon}
                </a>
              </Tooltip>
            )}
            grid={{
              xxl: 10,
              xl: 10,
              lg: 10,
              md: 10,
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
