import React, { PureComponent } from 'react';
import { Menu, Icon, Spin, Dropdown, Avatar } from 'antd';
import { Link } from 'react-router-dom';

export default class CGlobalHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
  };

  render() {
    const {
      collapsed,
    } = this.props;
    const menu = (
      <Menu className="menu" selectedKeys={[]}>
        <Menu.Item>
          <Icon type="setting" />设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    );

    const currentUser = {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
      name: '管理员',
    };
    return (
      <div className="header">
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <div className="right">
          {currentUser.name ? (
            <Dropdown overlay={menu}>
              <span className="action account">
                <Avatar size="small" className="avatar" src={currentUser.avatar} />
                <span className="name">{currentUser.name}</span>
              </span>
            </Dropdown>
          ) : (
            <Spin size="small" style={{ marginLeft: 8 }} />
          )}
        </div>
      </div>
    );
  }
}
