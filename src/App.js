import { CodeOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Highlight, themes } from "prism-react-renderer"

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
          <div className='header'>test.js</div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Highlight
            theme={themes.github}
            code={codeBlock}
            language="tsx"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span>{i + 1}</span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Code Snippets ©2023 Created by Longfei Wang
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;