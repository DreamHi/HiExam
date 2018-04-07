import React from 'react';
import { Layout, Breadcrumb, Button } from 'antd';
import CQuestionSearchArea from '../components/CQuestionSearchArea';
import CQuestionListTable from '../components/CQuestionListTable';
import mockExamsData from './mockData';

const { Content } = Layout;

class SQuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: mockExamsData.exams,
    };
  }

  render() {
    const { dataSource } = this.state;
    return (
      <div>
        <Breadcrumb className="content-header">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>题库</Breadcrumb.Item>
          <Breadcrumb.Item>题一览</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="content-body">
          <CQuestionSearchArea />
          <CQuestionListTable data={dataSource} />
        </Content>
      </div>
    );
  }
}

export default SQuestionsList;
