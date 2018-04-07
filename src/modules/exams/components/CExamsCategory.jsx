import React from 'react';
import { Link } from 'react-router-dom';
import { Card ,Icon } from 'antd';
import { ROUTE_EXAM, ROUTE_QUESTION_LIST } from '../../../util/constants';
import Helper from '../../../util/helper';

const { Meta } = Card;

class CExamsCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const actions = [
      <Link to={ROUTE_EXAM}><Icon type="copy" />&nbsp;&nbsp;试题</Link>,
      <Link to={ROUTE_QUESTION_LIST}><Icon type="switcher" />&nbsp;&nbsp;题库</Link>,
    ];
    return (
      <div className="exam-category">
        <div className="exam-category-title"><span>{data.name}</span></div>
        {
          data.exams && data.exams.map((exam) =>
            <Card
              className="exam-category-card"
              cover={<img alt="exam" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={actions}
              key={Helper.generateUUID()}
            >
              <Meta
                title={exam.title}
                description={exam.description}
              />
            </Card>
          )
        }
      </div>
    );
  }
}

export default CExamsCategory;
