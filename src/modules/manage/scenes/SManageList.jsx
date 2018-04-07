import React from 'react';
import { Layout, Breadcrumb, Tabs, Button } from 'antd';
import Helper from '../../../util/helper';

const { Content } = Layout;
const TabPane = Tabs.TabPane;

class SManageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Breadcrumb className="content-header">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>管理</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="content-body">
          <Tabs>
            <TabPane tab="分类" key="1">Content of tab 1</TabPane>
            <TabPane tab="用户" key="2">Content of tab 2</TabPane>
            <TabPane tab="组" key="3">Content of tab 3</TabPane>
            <TabPane tab="权限" key="4">Content of tab 3</TabPane>
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default SManageList;
