import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import CExamsCategory from '../components/CExamsCategory';
import mockExamsData from './mockData';
import Helper from '../../../util/helper';

const { Content } = Layout;

class SExamsCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Breadcrumb className="content-header">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="content-body">
          { mockExamsData.examCategory.map((d) => {
              return <CExamsCategory data={d} key={Helper.generateUUID()} />;
            })
          }
        </Content>
      </div>
    );
  }
}

export default SExamsCategory;
