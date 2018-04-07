import React from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
import { Form, Icon, Input, Button, Modal, Row } from 'antd';
import '../../../static/css/login.css';
import { post } from '../../../util/fetch';
import { API_LOGIN, ROUTE_HOME } from '../../../util/constants';
import storage from '../../../util/storage';

const FormItem = Form.Item;
const history = createHistory({ forceRefresh: true });

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SLogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // post(API_LOGIN, values, (error, response) => {
        //   if (error || response.user.valid === 0) {
        //     Modal.error({
        //       title: '用户名或者密码不正确。',
        //       okText: 'OK',
        //     });
        //   } else {
        //     storage.authenticateUser(response.token);
        //     storage.setUser(response.user);
        //     history.replace(ROUTE_HOME);
        //   }
        // });
        history.replace(ROUTE_HOME);
      } else {
        console.log(err);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const userNameError = isFieldTouched('name') && getFieldError('name');
    const passwordError = isFieldTouched('pass') && getFieldError('pass');

    return (
      <div className="login">
        <Row>
          <div className="form">
            <div className="logo">
              <span className="title">HiExam</span>
              <span className="sub-title">-在线考试平台</span>
            </div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError || ''}
              >
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入邮箱!' }],
                })(<Input prefix={<Icon type="user" />} placeholder="邮箱" />)}
              </FormItem>
              <FormItem
                validateStatus={passwordError ? 'error' : ''}
                help={passwordError || ''}
              >
                {getFieldDecorator('pass', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />)}
              </FormItem>
              <FormItem>
                <Button
                  htmlType="submit"
                  className={hasErrors(getFieldsError()) ? 'button-disabled' : 'button-enable'}
                  disabled={hasErrors(getFieldsError())}
                >
                  登录
                </Button>
              </FormItem>
            </Form>
          </div>
        </Row>
        <Row className="footer">
          <p>Copyright © 2018 HiDream Corporation. All Rights Reserved.</p>
        </Row>
      </div>
    );
  }
}

SLogin.propTypes = {
  form: PropTypes.object,
};

SLogin.defaultProps = {
  form: {},
};

export default Form.create()(SLogin);
