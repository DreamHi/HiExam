import React from 'react';
import { Layout, Breadcrumb, Tabs, Button } from 'antd';
import CExamSearchArea from '../components/CExamSearchArea';
import CExamsListTable from '../components/CExamsListTable';
import mockExamsData from './mockData';

const { Content } = Layout;
const { TabPane } = Tabs;

class SExamsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: mockExamsData.exams,
    };
  }

  render() {
    const operations = <Button className="btn-list">追加试卷</Button>;
    const { dataSource } = this.state;
    return (
      <div>
        <Breadcrumb className="content-header">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>试题一览</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="content-body">
          <CExamSearchArea />
          <Tabs tabBarExtraContent={operations} defaultActiveKey="1" animated>
            <TabPane tab="模拟试题" key="1">
              <CExamsListTable data={dataSource} />
            </TabPane>
            <TabPane tab="真题" key="2">
              <CExamsListTable data={dataSource} />
            </TabPane>
            <TabPane tab="每日一练" key="3">
              <CExamsListTable data={dataSource} />
            </TabPane>
            <TabPane tab="知识点练习" key="4">
              <CExamsListTable data={dataSource} />
            </TabPane>
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default SExamsList;
