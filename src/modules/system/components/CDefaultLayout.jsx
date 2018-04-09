import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Layout, Menu, Icon } from 'antd';
import CGlobalHeader from './CGlobalHeader';
import { ROUTE_MANAGE, ROUTE_HOME, ROUTE_EXAM, ROUTE_QUESTION } from '../../../util/constants';
import logo from '../../../static/img/logo.png';

const { Header, Sider, Footer } = Layout;
const { SubMenu } = Menu;

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
              <Link to={ROUTE_HOME}><Icon type="dashboard" />{collapsed ? '主页' : ''}</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="file-text" />
              {collapsed && <span>考试</span>}
            </Menu.Item>
            <SubMenu key="3" title={<span><Icon type="database" />{collapsed && <span>试题管理</span>}</span>}>
              <Menu.Item key="31">
                <span>试卷库</span>
              </Menu.Item>
              <Menu.Item key="32">
                <span>题库</span>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4">
              <Icon type="line-chart" />
              {collapsed && <span>试题分析</span>}
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="star" />
              {collapsed && <span>错题库</span>}
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="flag" />
              {collapsed && <span>历史成绩</span>}
            </Menu.Item>
            <Menu.Item key="7">
              <Link to={ROUTE_MANAGE}><Icon type="team" />{collapsed ? '成员管理' : ''}</Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="setting" />
              {collapsed && <span>设定</span>}
            </Menu.Item>
            {/*<Menu.Item key="11">*/}
              {/*<Link to={ROUTE_EXAM}><Icon type="copy" />{collapsed ? '试题' : ''}</Link>*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="2">*/}
              {/*<Link to={ROUTE_QUESTION}><Icon type="switcher" />{collapsed ? '题库' : ''}</Link>*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="41">*/}
              {/*<Icon type="star" />*/}
              {/*{collapsed && <span>错题本</span>}*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="3">*/}
              {/*<Icon type="line-chart" />*/}
              {/*{collapsed && <span>分析</span>}*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="4">*/}
              {/*<Link to={ROUTE_MANAGE}><Icon type="database" />{collapsed ? '管理' : ''}</Link>*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="5">*/}
              {/*<Icon type="setting" />*/}
              {/*{collapsed && <span>设置</span>}*/}
            {/*</Menu.Item>*/}
          </Menu>
        </Sider>
        <Layout>
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
            <Footer>
              Copyright © 2018 HiDream Corporation. All Rights Reserved.
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
