import React from 'react';
import { Layout, Breadcrumb, Card, Icon } from 'antd';
import CQuestionsCategory from '../components/CQuestionsCategory';
import mockExamsData from './mockData';
import Helper from '../../../util/helper';

const { Content } = Layout;

class SQuestionsCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: mockExamsData.questionsCategory,
    };
  }

  render() {
    const { dataSource } = this.state;
    return (
      <div>
        <Breadcrumb className="content-header">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>题库</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="content-body">
          <div className="exam-category">
            { dataSource.map((d) => {
                return <CQuestionsCategory data={d} key={Helper.generateUUID()} />;
              })
            }
            <Card className="exam-category-card">
              <div className="exam-category-add">
                <Icon type="plus" />
              </div>
            </Card>
          </div>
        </Content>
      </div>
    );
  }
}

export default SQuestionsCategory;
