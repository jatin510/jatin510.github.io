/***********************
  Nav Component
 ***********************/

import { Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = (props) => {
  const router = useRouter();
  const menu = [
    {
      title: "Resume",
      url: "/resume",
      section: "resume",
    },
    // {
    //   title: "Blog",
    //   url: "/blog",
    //   section: "projects",
    // },
    // {
    //   title: "Contact",
    //   url: "/contact",
    // },
  ];

  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            <strong>Jagdish</strong>
          </p>

          <Menu
            theme="light"
            mode="horizontal"
            // defaultSelectedKeys={["1"]}
            // selectedKeys={["1"]}
            className="menu"
          >
            {menu.map((item) => (
              <Menu.Item
                key={item.title}
                className={
                  item.url === router.pathname ? "ant-menu-item-selected" : ""
                }
              >
                <Link href={item.url}>{item.title}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Nav;
