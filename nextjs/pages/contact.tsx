import Head from "next/head";
import {
  Layout,
  Menu,
  Image,
  Avatar,
  Tooltip,
  Button,
  List,
  Typography,
} from "antd";
import Icon from "@ant-design/icons";
import {
  FacebookSvg,
  YoutubeSvg,
  InstagramSvg,
  TwitterSvg,
} from "../components/icons";
import Link from "next/link";
import { _Header } from "../_includes/header";

const { Header } = Layout;

export default function Contact() {
  return (
    <Layout>
      <_Header />

      <Layout className="site-layout">Contact Page</Layout>
    </Layout>
  );
}
