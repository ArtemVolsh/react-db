import { Layout } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import NumericButton from "./Components";

const { Header, Footer, Sider, Content} = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header>header</Header>
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>main content</Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
      <NumericButton></NumericButton>
    </>
  );
}

export default App;
