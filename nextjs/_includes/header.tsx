import { Image, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface _HeaderProps {}

export const _Header: React.FC<_HeaderProps> = ({}) => {
  const router = useRouter();
  const menu = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  const selectedMenu = menu.findIndex((item) => item.url === router.pathname);

  return (
    <Header className="header">
      <Image width={50} src="images/logo.png" />
      <Menu
        theme="light"
        mode="horizontal"
        // defaultSelectedKeys={["1"]}
        // selectedKeys={["1"]}
        className="menu"
      >
        {menu.map((item) => (
          <Menu.Item
            className={
              item.url === router.pathname ? "ant-menu-item-selected" : ""
            }
          >
            <Link href={item.url}>{item.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};
