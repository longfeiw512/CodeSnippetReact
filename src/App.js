import { CodeOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import PrismCode from "./PrismCode";
import React, { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Code Snippets', 'codeSnippets', <CodeOutlined />),
  getItem('Profile', 'profile', <UserOutlined />),
];
const codeBlock = `
const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}
`
const codeName = "test.js";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 0 0 20px",
            background: colorBgContainer,
          }}
        >
          <div className='header'>{codeName}</div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <PrismCode code={codeBlock} language="js" plugins={["line-numbers"]} />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Code Snippet
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;