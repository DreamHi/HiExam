import React from 'react';
import { Radio, Checkbox, Row, Col, Input, Button } from 'antd';

const RadioGroup = Radio.Group;

class CExamSearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    this.handleSearchClearButtonClick = this.handleSearchClearButtonClick(this);
  }

  handleRadioChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleCheckboxChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSearchButtonClick() {

  }

  handleSearchClearButtonClick() {

  }

  render() {
    return (
      <div className="exam-search">
        <table className="exam-search-table">
          <tbody>
            <tr>
              <th>大分类：</th>
              <td>
                <RadioGroup onChange={this.handleRadioChange} value={this.state.value}>
                  <Radio value={1}>日语</Radio>
                  <Radio value={2}>软考</Radio>
                </RadioGroup>
              </td>
              <td className="exam-search-table-space" />
              <th>试卷名</th>
              <td>
                <Input placeholder="试卷名" />
              </td>
            </tr>
            <tr>
              <th>小分类</th>
              <td>
                <Checkbox.Group style={{ width: '100%' }} onChange={this.handleCheckboxChange}>
                  <Checkbox value="A">N1</Checkbox>
                  <Checkbox value="B">N2</Checkbox>
                  <Checkbox value="C">N3</Checkbox>
                  <Checkbox value="D">N4</Checkbox>
                </Checkbox.Group>
              </td>
              <td className="exam-search-table-space" />
              <th>作成者</th>
              <td>
                <Input placeholder="作成者" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="exam-search-operation">
          <Button className="btn-list" onClick={this.handleSearchButtonClick}>检索</Button>
          <Button onClick={this.handleSearchClearButtonClick}>清空</Button>
        </div>
      </div>
    );
  }
}

export default CExamSearchArea;
