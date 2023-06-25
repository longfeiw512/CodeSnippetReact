import { CodeOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import CodeSnippetsMgmt from './CodeSnippetsMgmt/CodeSnippetsMgmt';
import Profile from "./Profile/profile";
import 'semantic-ui-css/semantic.min.css'

const { Content, Footer, Sider } = Layout;

const TAB_ENUM = Object.freeze({
  CODE: "code",
  PROFILE: "profile"
});

const tabToComponent = {
  [TAB_ENUM.CODE]: <CodeSnippetsMgmt />,
  [TAB_ENUM.PROFILE]: <Profile />
};

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Code Snippets', TAB_ENUM.CODE, <CodeOutlined />),
  getItem('Profile', TAB_ENUM.PROFILE, <UserOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedTab, setSelectedTab] = useState(TAB_ENUM.CODE);
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
        <Menu
          theme="dark"
          defaultSelectedKeys={[selectedTab]}
          mode="inline"
          items={items}
          onClick={({ key }) => setSelectedTab(key)}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {tabToComponent[selectedTab]}
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