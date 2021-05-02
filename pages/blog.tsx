import { Layout } from "antd";
import Nav from "../components/nav.component";

const { Header } = Layout;

export default function Contact() {
  return (
    <Layout>
      <Nav />
      <Layout className="site-layout">Blog </Layout>
    </Layout>
  );
}
