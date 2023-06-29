import { Layout } from "antd";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Skills from "./components/Skill/Skills";
import Resume from "./components/Resume/Resume";
import Sidebar from "./components/Sidebar/Sidebar";

const { Content, Footer, Sider } = Layout;
const App = () => {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Sidebar />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content
          style={{
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: "62px 24px",
              textAlign: "center",
              background: "#020312",
            }}
          >
            <Banner />
            <About />
            <Skills />
            <Resume />
          </div>
        </Content>
        <Footer
          style={{ textAlign: "center", background: "#020312", color: "#fff" }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
