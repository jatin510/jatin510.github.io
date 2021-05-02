import { Layout } from "antd";
import { _Header } from "../_includes/header";

const { Header } = Layout;

export default function About() {
  return (
    <Layout>
      <_Header />

      <Layout className="site-layout">About</Layout>
    </Layout>
  );
}
