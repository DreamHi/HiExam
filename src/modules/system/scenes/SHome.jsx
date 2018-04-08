import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class SHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout className="home">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="copy" />
              <span>试题</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="switcher" />
              <span>题库</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="line-chart" />
              <span>分析</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="database" />
              <span>管理</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="setting" />
              <span>设定</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SHome;
