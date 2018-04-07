import React from 'react';
import { Table, Button, Icon } from 'antd';

class CExamsListTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    const { data } = this.props;

    const columns = [
      {
        title: '试卷名',
        dataIndex: 'name',
      },
      {
        title: '题目数',
        dataIndex: 'questionsCount',
      },
      {
        title: '题目类型',
        dataIndex: 'type',
      },
      {
        title: '考试时间',
        dataIndex: 'time',
      },
      {
        title: '创建者',
        dataIndex: 'createdBy',
      },
      {
        title: '创建日',
        dataIndex: 'createdAt',
      },
      {
        title: '操作',
        render: () => {
          return (
            <span className="table-operation">
              <Button className="btn-list">
                <Icon type="edit" />
              </Button>
              <Button className="btn-list">
                <Icon type="export" />
              </Button>
              <Button className="btn-list">
                <Icon type="play-circle" />
              </Button>
              <Button className="btn-list">
                <Icon type="delete" />
              </Button>
            </span>
          );
        },
      }];

    return (
      <div>
        <Table
          columns={columns}
          rowKey={(record) => { return record._id; }}
          dataSource={data || []}
        />
      </div>
    );
  }
}

export default CExamsListTable;