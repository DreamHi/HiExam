import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Layout, Menu, Icon } from 'antd';
import CGlobalHeader from './CGlobalHeader';
import { ROUTE_MANAGE, ROUTE_HOME, ROUTE_EXAM, ROUTE_QUESTION } from '../../../util/constants';
import logo from '../../../static/img/logo.png';

const { Header, Sider } = Layout;

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.onCollapse = this.onCollapse.bind(this);
  }

  onCollapse() {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  }

  render() {
    const collapsed = !this.state.collapsed;
    return (
      <Layout className="home">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo"></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to={ROUTE_HOME}><Icon type="home" />{collapsed ? '主页' : ''}</Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to={ROUTE_EXAM}><Icon type="copy" />{collapsed ? '试题' : ''}</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={ROUTE_QUESTION}><Icon type="switcher" />{collapsed ? '题库' : ''}</Link>
            </Menu.Item>
            <Menu.Item key="41">
              <Icon type="star" />
              {collapsed && <span>错题本</span>}
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="line-chart" />
              {collapsed && <span>分析</span>}
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={ROUTE_MANAGE}><Icon type="database" />{collapsed ? '管理' : ''}</Link>
            </Menu.Item>

            <Menu.Item key="5">
              <Icon type="setting" />
              {collapsed && <span>设置</span>}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <CGlobalHeader
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            />
          </Header>
          <Layout style={{ padding: '12px 24px 24px 24px', display: 'inline-table' }}>
            {this.props.children}
          </Layout>
          <Row className="footer">
            <p>Copyright © 2018 HiDream Corporation. All Rights Reserved.</p>
          </Row>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
