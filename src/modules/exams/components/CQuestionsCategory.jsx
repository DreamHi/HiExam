import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'antd';
import { ROUTE_QUESTION_LIST } from '../../../util/constants';
import Helper from '../../../util/helper';

const { Meta } = Card;

class CQuestionsCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const actions = [
      <Link to={ROUTE_QUESTION_LIST}><Icon type="switcher" />&nbsp;&nbsp;查看</Link>,
    ];
    return (
      <div>
        <Card
          className="exam-category-card"
          actions={actions}
          key={Helper.generateUUID()}
        >
          <div className="exam-category-count">{data.count}题</div>
          <Meta
            title={data.title}
            description={data.description}
          />
        </Card>
      </div>
    );
  }
}

export default CQuestionsCategory;
