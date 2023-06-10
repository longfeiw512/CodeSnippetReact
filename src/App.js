import { CodeOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import CodeSnippetsMgmt from './CodeSnippetsMgmt/CodeSnippetsMgmt';

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
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <CodeSnippetsMgmt />
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