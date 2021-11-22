import { Layout } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import CalcField from "./Components/CalcField";

const { Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Content>
					
          <CalcField />
        </Content>
      </Layout>
    </>
  );
}

export default App;
